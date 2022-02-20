import express, { Router } from "express";
const router = express.Router();

router.get('/room/', (req, res) => 
{
    res.send('Hello from express and typescript - in room')
});

export default router;