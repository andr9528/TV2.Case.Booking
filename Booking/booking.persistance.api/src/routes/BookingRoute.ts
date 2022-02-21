import express, { Router } from "express";
import { IBookingController } from "../../../booking.core/src/controllers/IBookingController";
import { BookingController } from '../controllers/BookingController';
import { Booking } from '../../../booking.persistance/src/entity/Booking';

const router = express.Router();
const controller : IBookingController = new BookingController();

router.get('/booking/', (req, res) => 
{    
    //res.send('Hello from express and typescript - in user');
});

router.post('/booking/', (req, res) => 
{
    // I expect that any 'body' given, is going to be a Json body.
    let body = <string>req.body;
    let booking = <Booking>JSON.parse(body);
    //let user = <User>Object.assign(new User, body);

    let success = controller.Post(booking);

    if (success) res.send('Succesfully added booking');
    else res.send('Failed to add booking');
});

router.put('/booking/', (req, res) => 
{

});

router.delete('/booking/', (req, res) => 
{

});

export default router;