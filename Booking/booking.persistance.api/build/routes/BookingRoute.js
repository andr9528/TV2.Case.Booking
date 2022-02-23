"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Booking_1 = require("../persistance/entity/Booking");
const BookingController_1 = require("../controllers/BookingController");
const router = express_1.default.Router();
const controller = new BookingController_1.BookingController();
router.get('/booking', (req, res) => {
    //res.send('Hello from express and typescript - in user');
    let query = req.query;
    console.log("Query ->");
    console.log(query);
    let booking = Object.assign(new Booking_1.Booking, query);
    let retrieved = controller.Get(booking);
    if (retrieved.length > 0) {
        res.status(200);
        res.json(retrieved);
    }
    else {
        res.status(400);
        res.send("Failed to find any bookings from specified query");
    }
});
router.post('/booking', (req, res) => {
    // I expect that any 'body' given, is going to be a Json body.
    let body = req.body;
    console.log("Body ->");
    console.log(body);
    let booking = Object.assign(new Booking_1.Booking, body);
    console.log("User ->");
    console.log(booking);
    let success = controller.Post(booking);
    if (success) {
        res.status(200);
        res.send('Succesfully added booking');
    }
    else {
        res.status(400);
        res.send('Failed to add booking');
    }
});
router.put('/booking/', (req, res) => {
    res.status(501);
    res.send('Not implemented, yet');
});
router.delete('/booking/', (req, res) => {
    res.status(501);
    res.send('Not implemented, yet');
});
exports.default = router;
