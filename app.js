import express from "express";
import connect from "./connect/connect.js";
import rootRouter from "./routes/rootRouter.js";
import cors from 'cors';

// 몽고DB
connect();

const app = express();
const port = 8000;

app.use(cors());

app.use("/", rootRouter);

app.listen(port, () => {console.log(`Server is on ${port} port`)});