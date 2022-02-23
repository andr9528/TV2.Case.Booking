"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Room_1 = require("./Room");
let Booking = class Booking {
    /**
     *
     */
    constructor() {
        this.CLASSNAME = "Booking";
    }
    get userId() {
        if (this.user != undefined)
            return this.user.id;
        else
            return 0;
    }
    get roomId() {
        if (this.room != undefined)
            return this.room.id;
        else
            return 0;
    }
    get from() {
        return this._from;
    }
    set from(value) {
        if (this._to === undefined || value.toISOString < this._to.toISOString)
            this._from = value;
    }
    get to() {
        return this._to;
    }
    set to(value) {
        if (this._from === undefined || value.toISOString > this._from.toISOString)
            this._to = value;
    }
    //https://programmingwithswift.com/how-to-compare-dates-with-typescript/
    checkNoOverlab(otherBooking) {
        if (otherBooking.to.toISOString() <= this.from.toISOString())
            return true;
        if (otherBooking.from.toISOString() >= this.to.toISOString())
            return true;
        return false;
    }
};
__decorate([
    (0, typeorm_1.Column)({ select: false }),
    __metadata("design:type", String)
], Booking.prototype, "CLASSNAME", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.bookings),
    __metadata("design:type", Object)
], Booking.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Room_1.Room, room => room.bookings, {
        eager: true
    }),
    __metadata("design:type", Object)
], Booking.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Booking.prototype, "_from", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Booking.prototype, "_to", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Booking.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Booking.prototype, "version", void 0);
Booking = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], Booking);
exports.Booking = Booking;
