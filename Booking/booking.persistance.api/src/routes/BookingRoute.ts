import express, { Router } from "express";
const router = express.Router();

router.get('/booking/', (req, res) => 
{
    res.send('Hello from express and typescript - in booking')
});

export default router;