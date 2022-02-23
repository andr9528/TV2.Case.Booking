import { IBooking } from '../../../booking.core/src/entities/IBooking';
import { IRoom } from '../../../booking.core/src/entities/IRoom';

export class Room implements IRoom 
{
    public CLASSNAME: string;

    public bookings: IBooking[] = new Array<IBooking>();
    public capacity: number;
    public title: string;
    public id: number;
    public version: number;
    public location: string;

    

    /**
     *
     */
    constructor(cap : number, title : string, location : string, id : number = 0, version : number = 0) 
    {
        this.capacity = cap;
        this.title = title;
        this.location = location
        this.id = id;
        this.version = version;
        
        this.CLASSNAME = "Room";
    }
}