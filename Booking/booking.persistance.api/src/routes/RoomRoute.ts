import express, { Router } from "express";
import { IRoomController } from "../../../booking.core/src/controllers/IRoomController";
import { Room } from "../../../booking.persistance/src/entity/Room";
import { RoomController } from "../controllers/RoomController";

const router = express.Router();
const controller : IRoomController = new RoomController();

router.get('/room/', (req, res) => 
{    
    //res.send('Hello from express and typescript - in user');
});

router.post('/room/', (req, res) => 
{
    // I expect that any 'body' given, is going to be a Json body.
    let body = <string>req.body;
    let room = <Room>JSON.parse(body);
    //let user = <User>Object.assign(new User, body);

    let success = controller.Post(room);

    if (success) res.send('Succesfully added room \'' + room.title + '\'');
    else res.send('Failed to add room \'' + room.title + '\'');
});

router.put('/room/', (req, res) => 
{

});

router.delete('/room/', (req, res) => 
{

});

export default router;