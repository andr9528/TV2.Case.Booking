import express, { Router } from "express";
import { IBookingController } from "../../../booking.core/src/controllers/IBookingController";
import { BookingController } from '../controllers/BookingController';
import { Booking } from '../../../booking.persistance/src/entity/Booking';

const router = express.Router();
const controller : IBookingController = new BookingController();

router.get('/booking/', (req, res) => 
{    
    //res.send('Hello from express and typescript - in user');
    let query = req.query;
    let booking = query as unknown as Booking;

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

router.post('/booking/', (req, res) => 
{
    // I expect that any 'body' given, is going to be a Json body.
    let body = <string>req.body;
    let booking = <Booking>JSON.parse(body);
    //let user = <User>Object.assign(new User, body);

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