"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomController = void 0;
const BookingHandler_1 = require("../../../booking.persistance/src/BookingHandler");
class RoomController {
    /**
     *
     */
    constructor() {
        this.handler = new BookingHandler_1.BookingHandler();
    }
    Get(predicate) {
        throw new Error('Method not implemented.');
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
exports.RoomController = RoomController;
