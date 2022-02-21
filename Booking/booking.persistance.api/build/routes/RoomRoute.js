"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RoomController_1 = require("../controllers/RoomController");
const router = express_1.default.Router();
const controller = new RoomController_1.RoomController();
router.get('/room/', (req, res) => {
    //res.send('Hello from express and typescript - in user');
});
router.post('/room/', (req, res) => {
    // I expect that any 'body' given, is going to be a Json body.
    let body = req.body;
    let room = JSON.parse(body);
    //let user = <User>Object.assign(new User, body);
    let success = controller.Post(room);
    if (success)
        res.send('Succesfully added room \'' + room.title + '\'');
    else
        res.send('Failed to add room \'' + room.title + '\'');
});
router.put('/room/', (req, res) => {
});
router.delete('/room/', (req, res) => {
});
exports.default = router;
