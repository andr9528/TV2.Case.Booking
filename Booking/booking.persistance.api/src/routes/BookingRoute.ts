import express, { Router } from "express";
import { Booking } from "../persistance/entity/Booking";
import { IBookingController } from "../../../booking.core/src/controllers/IBookingController";
import { BookingController } from '../controllers/BookingController';

const router = express.Router();
const controller : IBookingController = new BookingController();

router.get('/booking', (req, res) => 
{    
    //res.send('Hello from express and typescript - in user');
    let query = req.query;
    console.log("Query ->");
    console.log(query);
    let booking = <Booking>Object.assign(new Booking, query);

    let retrieved = controller.Get(booking);
    if (retrieved.length >0) 
    {
        res.status(200);
        res.json(retrieved);
    }
    else 
    {
        res.status(400);
        res.send("Failed to find any bookings from specified query");
    }
});

router.post('/booking', (req, res) => 
{
    // I expect that any 'body' given, is going to be a Json body.
    let body = req.body;
    console.log("Body ->");
    console.log(body);
    let booking = <Booking>Object.assign(new Booking, body);
    console.log("User ->")
    console.log(booking)

    let success = controller.Post(booking);

    if (success) 
    {
        res.status(200);
        res.send('Succesfully added booking');
    }
    else 
    {
        res.status(400);
        res.send('Failed to add booking');
    }
});

router.put('/booking/', (req, res) => 
{
    res.status(501);
    res.send('Not implemented, yet');
});

router.delete('/booking/', (req, res) => 
{
    res.status(501);
    res.send('Not implemented, yet');
});

export default router;