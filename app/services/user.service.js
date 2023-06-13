import { httpStatus } from "../constants/constants.http-status.code.js";
import { userMsg } from "../constants/constants.message-response.js";
import { hashPassword } from "../utils/utils.bcrypt.js";
import * as userModelJs from "../models/user.model.js";
import responseFailed from "../utils/utils.response-failed.js";

export async function registerAccountService(res, body) {
  const { email = "", password = "", name } = body;
  const result = await userModelJs.findUserByEmail(email);
  if (result) {
    return responseFailed(res, httpStatus.conflict, userMsg.conflict);
  }
  const hashPass = await hashPassword(password);
  const userBody = {
    name,
    email,
    password: hashPass,
  };
  const newUser = await userModelJs.insertNewUser(res, userBody);
  return newUser;
}
