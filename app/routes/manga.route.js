import { Router } from "express";
import * as validatesBodyRequestJs from "../validators/validates.body-request.js";
import validateResult from "../validators/validates.result.js";
import { getAllMangaController } from "../controllers/manga.controller.js";

const mangaRoute = Router();

mangaRoute.get('/crawl', getAllMangaController);

export default mangaRoute;