import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { IBooking } from '../../../booking.core/src/entities/IBooking';
import { IRoom } from "../../../booking.core/src/entities/IRoom";
import { IUser } from '../../../booking.core/src/entities/IUser';
import { User } from "./User";
import { Room } from './Room';

@Entity()
export class Booking implements IBooking 
{
    @ManyToOne(() => User, user => user.bookings, {
        eager: true
    })
    public user: IUser;
    
    @ManyToOne(() => Room, room => room.bookings, {
        eager: true
    })
    public room: IRoom;

    @Column()
    private _from: Date;
    public get from(): Date {
        return this._from;
    }
    public set from(value: Date) {
        if (this._to == undefined || value.toISOString < this._to.toISOString) this._from = value;
    }
    
    @Column()
    private _to: Date;
    public get to(): Date {
        return this._to;
    }
    public set to(value: Date) {
        if (this._from == undefined || value.toISOString > this._from.toISOString) this._to = value;
    }
       
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public version: number;
    
    //https://programmingwithswift.com/how-to-compare-dates-with-typescript/
    public checkNoOverlab(otherBooking: IBooking): boolean {
        if (otherBooking.to.toISOString() <= this.from.toISOString()) return true;
        if (otherBooking.from.toISOString() >= this.to.toISOString()) return true;
        return false;
    }
}