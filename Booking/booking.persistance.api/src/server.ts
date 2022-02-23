import http from 'http';
import express from 'express';
import bodyParser from 'body-parser'

const app = express();
const port = process.env.PORT || 3000;

// https://stackoverflow.com/questions/10005939/how-do-i-consume-the-json-post-data-in-an-express-application
app.use(bodyParser.json());

import homeRoute from "./routes/HomeRoute";
app.use('/', homeRoute);

import userRoute from "./routes/UserRoute";
app.use('/', userRoute);

import roomRoute from "./routes/RoomRoute"
app.use('/', roomRoute);

import bookingRoute from "./routes/BookingRoute"
app.use('/', bookingRoute);

app.use(function(error, req, res, next) 
{
    console.log("Error detected in request");
    console.log("Error ->");
    console.log(error);
});

const server = app.listen(port, () => console.log('Api listening on PORT ' + port));

