"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingHandler = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Booking_1 = require("./entity/Booking");
const User_1 = require("./entity/User");
const Room_1 = require("./entity/Room");
class BookingHandler {
    GetMultiple(predicate) {
        switch (predicate.CLASSNAME) {
            case Booking_1.Booking.name:
                return this.GetBooking(predicate, false);
            case User_1.User.name:
                return this.GetUser(predicate, false);
            case Room_1.Room.name:
                return this.GetRoom(predicate, false);
            default:
                throw new Error("Invalid type detected - ERROR ERROR ERROR");
        }
    }
    GetOne(predicate) {
        switch (predicate.CLASSNAME) {
            case Booking_1.Booking.name:
                return this.GetBooking(predicate, true);
            case User_1.User.name:
                return this.GetUser(predicate, true);
            case Room_1.Room.name:
                return this.GetRoom(predicate, true);
            default:
                throw new Error("Invalid type detected - ERROR ERROR ERROR");
        }
    }
    GetBooking(predicate, onlyOne) {
        let result = null;
        this.PerformActionOnConnection((connection) => __awaiter(this, void 0, void 0, function* () {
            let query = yield connection.getRepository(Booking_1.Booking).createQueryBuilder('booking').
                leftJoinAndSelect('booking.user', 'user').leftJoinAndSelect('booking.room', 'room')
                .where(predicate);
            if (onlyOne)
                result = yield query.getOne();
            else
                result = yield query.getMany();
        }));
        return result;
    }
    GetUser(predicate, onlyOne) {
        let result = null;
        this.PerformActionOnConnection((connection) => __awaiter(this, void 0, void 0, function* () {
            let query = yield connection.getRepository(User_1.User).createQueryBuilder('user').
                leftJoinAndSelect('user.bookings', 'bookings').where(predicate);
            if (onlyOne)
                result = yield query.getOne();
            else
                result = yield query.getMany();
        }));
        return result;
    }
    GetRoom(predicate, onlyOne) {
        let result = null;
        this.PerformActionOnConnection((connection) => __awaiter(this, void 0, void 0, function* () {
            let query = yield connection.getRepository(Room_1.Room).createQueryBuilder('room').
                leftJoinAndSelect('room.bookings', 'bookings').where(predicate);
            if (onlyOne)
                result = yield query.getOne();
            else
                result = yield query.getMany();
        }));
        return result;
    }
    Create(entity) {
        if (entity.id != 0)
            throw new Error("Id of a new entity has to be 0");
        let result = null;
        this.PerformActionOnConnection((connection) => __awaiter(this, void 0, void 0, function* () {
            result = yield connection.manager.save(entity);
        }));
        return result;
    }
    Update(entity) {
        if (entity.id == 0)
            throw new Error("Id of an updating entity cannot be 0");
        let result = null;
        this.PerformActionOnConnection((connection) => __awaiter(this, void 0, void 0, function* () {
            result = yield connection.manager.save(entity);
        }));
        return result;
    }
    Delete(entity) {
        if (entity.id == 0)
            throw new Error("Id of a deleting entity cannot be 0");
        let result = null;
        this.PerformActionOnConnection((connection) => __awaiter(this, void 0, void 0, function* () {
            result = yield connection.manager.remove(entity);
        }));
        return result;
    }
    PerformActionOnConnection(action) {
        (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () { return action(connection); })).catch(error => console.log(error));
    }
}
exports.BookingHandler = BookingHandler;
