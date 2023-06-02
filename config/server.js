import express, { urlencoded } from "express";
import initSchemaTables from "../app/database/index.js";
import { httpStatus } from "../app/constants/constants.http-status.code.js";
import { serverMsg } from "../app/constants/constants.message-response.js";
import indexRouters from "../app/routes/index.js";
import initAdmin from "../app/database/init-admin.js";
import bodyParser from "body-parser";

const app = express();

initSchemaTables();
setTimeout(async () => {
  await initAdmin();
}, 200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(urlencoded({ extended: false }));
app.use('/api', indexRouters);

app.use((err, res) => {
  console.log(err);
  err.statusCode = err.statusCode || httpStatus.serverInterval;
  err.message = err.message || serverMsg;
  res.status(err.statusCode).json({
    message: err.message,
  });
});

export default app;
