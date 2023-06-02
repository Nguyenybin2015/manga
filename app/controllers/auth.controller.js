import dotenv from 'dotenv';
import { httpStatus } from '../constants/constants.http-status.code.js';
import { authMsg, serverMsg } from '../constants/constants.message-response.js';
import { loginService, verifyOtpService } from '../services/auth.service.js';
import responseRequest from '../utils/utils.response.js';
import responseFailed from '../utils/utils.response-failed.js';
// import sendEmail from '../services/send-mail.service.js';

dotenv.config();

export async function login(req, res) {
  try {
    const { body } = req;
    // console.log(req);
    const result = await loginService(res, body);
    if (!res.headersSent) {
      responseRequest(res, result, authMsg.login);
    }
  } catch (error) {
    console.log(error);
    responseFailed(res, httpStatus.serverInterval, serverMsg);
  }
}

export function verifyOtp(req, res) {
  try {
    const { body } = req;
    const result = verifyOtpService(res, body);
    if (!res.headersSent) {
      responseRequest(res, result, authMsg.verifyOtpSuccess);
    }
  } catch (error) {
    responseFailed(res, httpStatus.serverInterval, serverMsg);
  }
}
// export function getOtp(req, res) {
//   try {
//     sendEmail(req, res);
//   } catch (error) {
//     responseFailed(res, httpStatus.serverInterval, serverMsg);
//   }
// }
