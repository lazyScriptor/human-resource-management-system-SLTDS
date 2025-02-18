import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { upFunc } from "../helpers/createUploadDirectory.js";

// Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "documents";
    if (file.fieldname === "avatar") folder = "avatars";
    const uploadPath = path.join(__dirname, "../../uploads", folder);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage });

export const filesUploadFunction = async (req, res) => {
  const upload = upFunc();
  upload.fields([{ name: "avatar" }, { name: "document" }])(
    req,
    res,
    async (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "File upload failed", error: err.message });
      }

      if (!req.files || !req.files["avatars"] || !req.files["documents"]) {
        return res.status(400).json({ message: "Both files are required!" });
      }

      const avatarPath = `/uploads/avatars/${req.files["avatar"][0].name}`;
      const documentPath = `/uploads/documents/${req.files["document"][0].name}`;

      return res.json({
        message: "Files uploaded successfully",
        avatarPath,
        documentPath,
      });
    }
  );
};

export const filesUploadFunctionMiddleware = async (req, res, next) => {
  const upload = upFunc();
  upload.fields([{ name: "avatars" }, { name: "documents" }])(
    req,
    res,
    async (err) => {
      if (err) {
        console.log("failed");
        // return { message: "File upload failed", error: err.message };
        next();
      }

      if (!req.files || !req.files["avatars"] || !req.files["documents"]) {
        console.log("both required");
        next();
        return { message: "Both files are required!" };
      }
      const avatarPath = `/uploads/avatars/${req.files["avatars"][0].name}`;
      const documentPath = `/uploads/documents/${req.files["documents"][0].name}`;
      console.log("success");
      next();
      // return {
      //   message: "Files uploaded successfully",
      //   avatarPath,
      //   documentPath,
      // };
    }
  );
};
