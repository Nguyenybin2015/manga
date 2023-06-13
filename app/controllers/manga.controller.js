import { httpStatus } from "../constants/constants.http-status.code.js";
import { serverMsg } from "../constants/constants.message-response.js";
import responseFailed from "../utils/utils.response-failed.js";
import responseRequest from "../utils/utils.response.js";
import { getAllMangaService } from "../services/manga.service.js"

export async function getAllMangaController(req, res) {
  try {
    const { body } = req;
    await getAllMangaService(res, body);
    return responseRequest(res, 'OK', 'Success');
  } catch (error) {
    console.log(error);
    responseFailed(res, httpStatus.serverInterval, serverMsg);
  }
}
