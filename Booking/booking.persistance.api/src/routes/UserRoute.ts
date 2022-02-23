import express from "express";
import { User } from "../persistance/entity/User";
import { IUserController } from "../../../booking.core/src/controllers/IUserController";
import { UserController } from "../controllers/UserController";

const router = express.Router();
const controller : IUserController = new UserController();

router.get('/user', (req, res) => 
{    
    //res.send('Hello from express and typescript - in user');
    let query = req.query;
    console.log("Query ->");
    console.log(query);
    let user = <User>Object.assign(new User, query);

    let retrieved = controller.Get(user);
    if (retrieved.length >0) 
    {
        res.status(200);
        res.json(retrieved);
    }
    else 
    {
        res.status(400);
        res.send("Failed to find any users from specified query");
    }
});

router.post('/user', (req, res) => 
{
    // I expect that any 'body' given, is going to be a Json body.
    let body = req.body;
    console.log("Body ->");
    console.log(body);
    let user = <User>Object.assign(new User, body);
    console.log("User ->")
    console.log(user)

    let success = controller.Post(user);

    if (success) 
    {
        res.status(200);
        res.send('Succesfully added user \'' + user.name + '\'');
    }
    else  
    {
        res.status(400);
        res.send('Failed to add user \'' + user.name + '\'');
    }
});

router.put('/user/', (req, res) => 
{
    res.status(501);
    res.send('Not implemented, yet');
});

router.delete('/user/', (req, res) => 
{
    res.status(501);
    res.send('Not implemented, yet');
});

export default router;