import app from "./config/server.js";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
app.listen(port, () => console.log(`Connected on port ${port}.`));

