import express, { Router } from "express";
import { IUserController } from "../../../booking.core/src/controllers/IUserController";
import { UserController } from "../controllers/UserController";
import { User } from '../../../booking.persistance/build/src/entity/User';
import { BookingHandler } from '../../../booking.persistance/build/src/Handler';

const router = express.Router();
const controller : IUserController = new UserController(new BookingHandler())

router.get('/user/', (req, res) => 
{    
    res.send('Hello from express and typescript - in user');
});

router.post('/user/', (req, res) => 
{
    // I expect that any 'body' given, is going to be a Json body.
    let body = <string>req.body;
    let user = <User>JSON.parse(body);
    //let user = <User>Object.assign(new User, body);

    let success = controller.Post(user);

    if (success) res.send('Succesfully added user \'' + user.name + '\'');
    else res.send('Failed to add user \'' + user.name + '\'');
})

export default router;