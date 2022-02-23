import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from "./User";
import { Room } from './Room';
import { IBooking } from "../../../../booking.core/src/entities/IBooking";
import { IUser } from "../../../../booking.core/src/entities/IUser";
import { IRoom } from "../../../../booking.core/src/entities/IRoom";

@Entity()
export class Booking implements IBooking 
{
    @Column({select: false})
    public CLASSNAME: string;
   
    @ManyToOne(() => User, user => user.bookings)
    public user: IUser;
    
    public get userId(): number 
    {
        if (this.user != undefined) return this.user.id;
        else return 0;
    }

    @ManyToOne(() => Room, room => room.bookings, {
        eager: true
    })
    public room: IRoom;

    public get roomId(): number 
    {
        if (this.room != undefined) return this.room.id;
        else return 0;
    }
    
    @Column()
    private _from: Date;
    public get from(): Date {
        return this._from;
    }
    public set from(value: Date) {
        if (this._to === undefined || value.toISOString < this._to.toISOString) this._from = value;
    }
    
    @Column()
    private _to: Date;
    public get to(): Date {
        return this._to;
    }
    public set to(value: Date) {
        if (this._from === undefined || value.toISOString > this._from.toISOString) this._to = value;
    }
       
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public version: number;
    
    //https://programmingwithswift.com/how-to-compare-dates-with-typescript/
    public checkNoOverlab(otherBooking: IBooking): boolean 
    {
        if (otherBooking.to.toISOString() <= this.from.toISOString()) return true;
        if (otherBooking.from.toISOString() >= this.to.toISOString()) return true;
        return false;
    }

    /**
     *
     */
    constructor() {
        this.CLASSNAME = "Booking";
    }
}