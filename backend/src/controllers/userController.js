import sequelize from "../helpers/connctionEstablish.js";
import { Op } from "sequelize";
import User from "../models/userModel.js";
import Role from "../models/roleModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10; // Not used in this code but should be used when hashing passwords
const JWT_SECRET = process.env.JWT_SECRET || "cricket"; // Use environment variable
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "baseballSecret"; // Use environment variable

const generateAccessToken = (user) => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "15m" });
};

const generateRefreshToken = (user) => {
  return jwt.sign(user, JWT_REFRESH_SECRET, { expiresIn: "7d" });
};

export const userController = {
  validateSessionMiddleWare: async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res
        .status(401)
        .json({ message: "Unauthorized managed by backend" });
    }

    try {
      const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
      console.log(decoded);

      const user = await User.findByPk(decoded.userId);

      if (user) {
        next();
      } else {
        res.status(401).json({ message: "Invalid refresh token" });
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Unauthorized" });
    }
  },
  validateSession: async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res
        .status(401)
        .json({ message: "Unauthorized managed by backend" });
    }
    try {
      const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
      const username = decoded.username;
      const user = await User.findOne({
        where: { username },
        include: [
          {
            model: Role,
            as: "Role", // Alias must match the association
            attributes: ["RoleName", "AccessLevel"], // Select specific columns
          },
        ],
      });

      if (user) {
        const userData = {
          userId: user.UserID,
          username: user.Username,
          role: user.Role.RoleName,
          accessLevel: user.Role.AccessLevel,
        };
        console.log("Token data", userData);
        const accessToken = generateAccessToken(userData);
        const refreshToken = generateRefreshToken(userData);

        // Store the refresh token in an HTTP-only cookie
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        });

        return res.json({
          accessToken,
          message: "Re- Authorization successful",
        });
      } else {
        res.status(401).json({ message: "Invalid refresh token" });
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Unauthorized" });
    }
  },
  authenticateUser: async (Username, Password) => {
    if (!Username || !Password) {
      return { message: "Username and password are required" };
    }

    try {
      const user = await User.findOne({
        where: { Username },
        include: [
          {
            model: Role,
            as: "Role", 
            attributes: ["RoleName", "AccessLevel"], 
          },
        ],
      });
      if (user) {
        const passwordMatch = bcrypt.compareSync(Password, user.PasswordHash);

        if (passwordMatch) {
          return {
            userId: user.UserID,
            username: user.Username,
            role: user.Role.RoleName, // Example: Include the user role for frontend authorization
            accessLevel: user.Role.AccessLevel,
          };
        } else {
          // Password does not match

          return { message: "Invalid username or password" };
        }
      } else {
        // User not found

        return { message: "User not found" };
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      return { message: "Internal server error" };
    }
  },

  authorizeCheck: async (req, res) => {
    console.log("first");
    const { Username, Password } = req.body;

    const user = await userController.authenticateUser(Username, Password);

    if (user && user.userId) {
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      });

      return res.json({
        accessToken,
        message: "Authorization successful",
      });
    }

    return res
      .status(401)
      .json({ message: user.message || "Invalid credentials" });
  },

  createUser: async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
      const user = await User.create(req.body, { transaction });

      await transaction.commit();
      res.status(201).json({
        success: true,
        data: user,
      });
    } catch (error) {
      if (!transaction.finished) {
        await transaction.rollback();
      }
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();

      res.json({ success: true, data: users });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching users",
      });
    }
  },

  updateUsersByAge: async (req, res) => {
    try {
      const [affectedCount] = await User.update(req.body, {
        where: { age: { [Op.gt]: req.body.minAge } },
      });

      if (affectedCount === 0) {
        return res.status(404).json({
          success: false,
          message: "No users found matching criteria",
        });
      }

      res.json({
        success: true,
        message: `${affectedCount} users updated`,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  getUserByUsername: async (req, res) => {
    try {
      const user = await User.findOne({
        where: { Username: req.params.username },
        limit: 1,
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      res.json({ success: true, data: user });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  bulkCreateUsers: async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
      const users = await User.bulkCreate(req.body, {
        validate: true,
        transaction,
      });

      await transaction.commit();
      res.status(201).json({
        success: true,
        data: users,
      });
    } catch (error) {
      await transaction.rollback();
      console.log(error);
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // Delete user
  deleteUser: async (req, res) => {
    try {
      const deleted = await User.destroy({
        where: { UserID: req.params.id },
      });

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      res.json({ success: true, message: "User deleted" });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};
