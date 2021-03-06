import express, { Router } from "express";
import { Room } from '../persistance/entity/Room';
import { IRoomController } from "../../../booking.core/src/controllers/IRoomController";
import { RoomController } from "../controllers/RoomController";

const router = express.Router();
const controller : IRoomController = new RoomController();

router.get('/room', (req, res) => 
{    
    //res.send('Hello from express and typescript - in room');
    let query = req.query;
    console.log("Query ->");
    console.log(query);
    let room = <Room>Object.assign(new Room, query);

    let retrieved = controller.Get(room);
    if (retrieved.length >0) 
    {
        res.status(200);
        res.json(retrieved);
    }
    else 
    {
        res.status(400);
        res.send("Failed to find any rooms from specified query");
    }
});

router.post('/room', (req, res) => 
{
    // I expect that any 'body' given, is going to be a Json body.
    let body = req.body;
    console.log("Body ->");
    console.log(body);
    let room = <Room>Object.assign(new Room, body);
    console.log("User ->")
    console.log(Room)

    let success = controller.Post(room);

    if (success) 
    {
        res.status(200);
        res.send('Succesfully added room \'' + room.title + '\'');
    }
    else  
    {
        res.status(400);
        res.send('Failed to add room \'' + room.title + '\'');
    }
});

router.put('/room/', (req, res) => 
{
    res.status(501);
    res.send('Not implemented, yet');
});

router.delete('/room/', (req, res) => 
{
    res.status(501);
    res.send('Not implemented, yet');
});

export default router;