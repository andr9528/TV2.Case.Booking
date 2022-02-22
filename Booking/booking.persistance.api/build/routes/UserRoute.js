"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
const router = express_1.default.Router();
const controller = new UserController_1.UserController();
router.get('/user/', (req, res) => {
    //res.send('Hello from express and typescript - in user');
    let query = req.query;
    query;
});
router.post('/user/', (req, res) => {
    // I expect that any 'body' given, is going to be a Json body.
    let body = req.body;
    let user = JSON.parse(body);
    //let user = <User>Object.assign(new User, body);
    let success = controller.Post(user);
    if (success)
        res.send('Succesfully added user \'' + user.name + '\'');
    else
        res.send('Failed to add user \'' + user.name + '\'');
});
router.put('/user/', (req, res) => {
});
router.delete('/user/', (req, res) => {
});
exports.default = router;
