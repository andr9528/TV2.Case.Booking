import http from 'http';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

import homeRoute from "./routes/HomeRoute";
app.use('/', homeRoute);

import userRoute from "./routes/UserRoute";
app.use('/user/', userRoute);

import roomRoute from "./routes/RoomRoute"
app.use('/room/', roomRoute);

import bookingRoute from "./routes/BookingRoute"
app.use('/booking/', bookingRoute);

const server = app.listen(port, () => console.log('Api listening on PORT ' + port));

