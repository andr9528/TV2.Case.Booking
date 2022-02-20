import http from 'http';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

import homeRoute from "./routes/HomeRoute";
app.use('/', homeRoute);

import userRoute from "./routes/UserRoute";
app.use('/user/', userRoute);

const server = app.listen(port, () => console.log('Api listening on PORT ' + port));
