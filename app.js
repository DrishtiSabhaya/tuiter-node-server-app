import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/user-controller.js";
import TuitController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
HelloController(app);
UserController(app);
TuitController(app);
app.listen(process.env.PORT || 4000);