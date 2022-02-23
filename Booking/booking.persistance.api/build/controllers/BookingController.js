"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const BookingHandler_1 = require("../persistance/BookingHandler");
class BookingController {
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
        if (entity.user == undefined || entity.room == undefined) {
            console.log("Reveived Booking POST request with invalid input.");
            console.log(entity);
            return false;
        }
        if (entity.user.id == undefined || entity.room.id == undefined) {
            console.log("Reveived Booking POST request with invalid input.");
            console.log(entity);
            return false;
        }
        let user = this.handler.GetOne(entity.user);
        user.bookings.forEach(element => {
            if (!element.checkNoOverlab(entity)) {
                console.log("User has an overlapping booking.");
                console.log(user);
                console.log(entity);
                return false;
            }
        });
        let room = this.handler.GetOne(entity.room);
        room.bookings.forEach(element => {
            if (!element.checkNoOverlab(entity)) {
                console.log("Room has an overlapping booking.");
                console.log(room);
                console.log(entity);
                return false;
            }
        });
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
exports.BookingController = BookingController;
