"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BookingController_1 = require("../controllers/BookingController");
const router = express_1.default.Router();
const controller = new BookingController_1.BookingController();
router.get('/booking/', (req, res) => {
    //res.send('Hello from express and typescript - in user');
});
router.post('/booking/', (req, res) => {
    // I expect that any 'body' given, is going to be a Json body.
    let body = req.body;
    let booking = JSON.parse(body);
    //let user = <User>Object.assign(new User, body);
    let success = controller.Post(booking);
    if (success)
        res.send('Succesfully added booking');
    else
        res.send('Failed to add booking');
});
router.put('/booking/', (req, res) => {
});
router.delete('/booking/', (req, res) => {
});
exports.default = router;
