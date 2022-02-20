"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const HomeRoute_1 = __importDefault(require("./routes/HomeRoute"));
app.use('/', HomeRoute_1.default);
const UserRoute_1 = __importDefault(require("./routes/UserRoute"));
app.use('/user/', UserRoute_1.default);
const server = app.listen(port, () => console.log('Api listening on PORT ' + port));
