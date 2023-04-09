import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/user-controller.js";
import TuitController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';

mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
HelloController(app);
UserController(app);
TuitController(app);
app.listen(process.env.PORT || 4000);