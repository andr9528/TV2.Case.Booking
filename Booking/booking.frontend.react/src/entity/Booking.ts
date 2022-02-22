import { IBooking } from '../../../booking.core/src/entities/IBooking';
import { IRoom } from '../../../booking.core/src/entities/IRoom';
import { IUser } from '../../../booking.core/src/entities/IUser';
export class Booking implements IBooking 
{
    public user: IUser;    
    public room: IRoom;

    public userId: number;
    public roomId: number;

    private _from!: Date;
    public get from(): Date {
        return this._from;
    }
    public set from(value: Date) {
        if (this._to === undefined || value.toISOString < this._to.toISOString) this._from = value;
    }
    
    private _to!: Date;
    public get to(): Date {
        return this._to;
    }
    public set to(value: Date) {
        if (this._from === undefined || value.toISOString > this._from.toISOString) this._to = value;
    }
       
    public id: number;
    public version: number;


    /**
     *
     */
    constructor(user : IUser, room : IRoom, from : Date, to : Date, id : number = 0, version : number = 0) 
    {        
        this.user = user;
        this.userId = user.id;
        this.room = room;
        this.roomId = room.id
        this.id = id;
        this.version = version;         
        this.to = to;
        this.from = from;
    }
   

    //https://programmingwithswift.com/how-to-compare-dates-with-typescript/
    public checkNoOverlab(otherBooking: IBooking): boolean 
    {
        if (otherBooking.to.toISOString() <= this.from.toISOString()) return true;
        if (otherBooking.from.toISOString() >= this.to.toISOString()) return true;
        return false;
    }
}