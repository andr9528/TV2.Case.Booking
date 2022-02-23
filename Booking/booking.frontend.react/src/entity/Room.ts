import { IBooking } from '../../../booking.core/src/entities/IBooking';
import { IRoom } from '../../../booking.core/src/entities/IRoom';

export class Room implements IRoom 
{
    bookings: IBooking[] = new Array<IBooking>();
    capacity: number;
    title: string;
    id: number;
    version: number;
    location: string;

    

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
    }
}