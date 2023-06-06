import { Router } from 'express';
import { login, verifyOtp } from '../controllers/auth.controller.js';
import { verifyOtpValidation } from '../validators/validates.body-request.js';
import validateResult from '../validators/validates.result.js';
// import sendEmail from '../services/send-mail.service.js';
// import isAuth from '../middlewares/authen-token.js';

const authRoutes = Router();

authRoutes.get('/test', function(req, res) {
  res.send("test")
 });
authRoutes.post('/login', login);
authRoutes.put(
  '/otp-verify',
  [...verifyOtpValidation, validateResult],
  verifyOtp
);
// authRoutes.get('/get-otp', [isAuth], sendEmail);

export default authRoutes;
