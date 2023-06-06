import { httpStatus } from '../constants/constants.http-status.code.js';
import { authMsg, serverMsg } from '../constants/constants.message-response.js';
import responseFailed from '../utils/utils.response-failed.js';
import * as userServiceJs from '../services/user.service.js';
import responseRequest from '../utils/utils.response.js';

export async function registerAccount(req, res) {
  try {
    const { body } = req;
    const result = await userServiceJs.registerAccountService(res, body);
    if (!res.headersSent) {
      responseRequest(res, result, authMsg.registerAccount);
    }
  } catch (error) {
    console.log('err', error);
    responseFailed(res, httpStatus.serverInterval, serverMsg);
  }
}