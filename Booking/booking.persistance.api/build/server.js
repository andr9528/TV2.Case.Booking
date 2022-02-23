"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// https://stackoverflow.com/questions/10005939/how-do-i-consume-the-json-post-data-in-an-express-application
app.use(body_parser_1.default.json());
const HomeRoute_1 = __importDefault(require("./routes/HomeRoute"));
app.use('/', HomeRoute_1.default);
const UserRoute_1 = __importDefault(require("./routes/UserRoute"));
app.use('/', UserRoute_1.default);
const RoomRoute_1 = __importDefault(require("./routes/RoomRoute"));
app.use('/', RoomRoute_1.default);
const BookingRoute_1 = __importDefault(require("./routes/BookingRoute"));
app.use('/', BookingRoute_1.default);
app.use(function (error, req, res, next) {
    console.log("Error detected in request");
    console.log("Error ->");
    console.log(error);
});
const server = app.listen(port, () => console.log('Api listening on PORT ' + port));
