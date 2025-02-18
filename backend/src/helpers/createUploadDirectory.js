import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure folders exist
// Create parent folder and other 2 folders and check the availablity of the folders
const grandParent = path.join(__dirname, "..", "..");
const uploadDir = path.join(grandParent, "uploads");
const avatarDir = path.join(uploadDir, "avatars");
const documentDir = path.join(uploadDir, "documents");


export const upFunc = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let uploadPath = grandParent;
      if (file.fieldname === "avatars") uploadPath = avatarDir;
      if (file.fieldname === "documents") uploadPath = documentDir;
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueSuffix);
    },
  });

  return multer({ storage });
};
