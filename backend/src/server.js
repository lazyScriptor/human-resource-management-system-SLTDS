import express from "express";
import cors from "cors";
import api from "./routes/api/index.js";
import { connectionEstablish } from "./helpers/connctionEstablish.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

// Create directories if they don't exist
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const grandParent = path.join(__dirname, "..", "..");
const uploadDir = path.join(grandParent, "uploads");
const avatarDir = path.join(uploadDir, "avatars");
const documentDir = path.join(uploadDir, "documents");

[uploadDir, avatarDir, documentDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Initialize Express app
const app = express();
app.use(cookieParser());
const port = 3000;

// CORS setup
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Adjust this based on your frontend URL
    credentials: true,
  })
);

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = documentDir;
    if (file.fieldname === "avatars") uploadPath = avatarDir;
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

// API route for uploading files
// app.post(
//   "/api/upload",
//   upload.fields([{ name: "avatars" }, { name: "documents" }]),
//   (req, res) => {
//     if (!req.files || !req.files["avatars"] || !req.files["documents"]) {
//       return res.status(400).json({ message: "Both files are required!" });
//     }

//     const avatarPath = `/uploads/avatars/${req.files["avatars"][0].filename}`;
//     const documentPath = `/uploads/documents/${req.files["documents"][0].filename}`;

//     res.json({
//       message: "Files uploaded successfully",
//       avatarPath,
//       documentPath,
//     });
//   }
// );

// API router
app.use("/api", api);

// Establish DB connection
connectionEstablish();

// Static file serving
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
