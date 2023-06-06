import { Router } from "express";
import { login, verifyOtp } from "../controllers/auth.controller.js";
import * as validatesBodyRequestJs from "../validators/validates.body-request.js";
import validateResult from "../validators/validates.result.js";
import * as userControllerJs from '../controllers/user.controller.js';
// import sendEmail from '../services/send-mail.service.js';
// import isAuth from '../middlewares/authen-token.js';

const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.put(
  "/otp-verify",
  [...validatesBodyRequestJs.verifyOtpValidation, validateResult],
  verifyOtp,
);
authRoutes.post(
  "/register",
  [...validatesBodyRequestJs.registerValidation, validateResult],
  userControllerJs.registerAccount,
);
// authRoutes.get('/get-otp', [isAuth], sendEmail);

export default authRoutes;
