"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const BookingHandler_1 = require("../persistance/BookingHandler");
class UserController {
    /**
     *
     */
    constructor() {
        this.handler = new BookingHandler_1.BookingHandler();
    }
    Get(predicate) {
        let result;
        result = this.handler.GetMultiple(predicate);
        return result;
    }
    Post(entity) {
        let result = this.handler.Create(entity);
        return true;
    }
    Put(entity) {
        throw new Error('Method not implemented.');
    }
    Delete(predicate) {
        throw new Error('Method not implemented.');
    }
}
exports.UserController = UserController;
