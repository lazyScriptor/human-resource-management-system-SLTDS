import { Router } from "express";
import bataController from "../../controllers/bataController.js";

const bataRoute = Router();

bataRoute.get("/", bataController.getAllBataDetails);

export default bataRoute;
