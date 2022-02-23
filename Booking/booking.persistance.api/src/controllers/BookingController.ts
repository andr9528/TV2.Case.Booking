import { BookingHandler } from '../persistance/BookingHandler';
import { IBookingController } from '../../../booking.core/src/controllers/IBookingController';
import { IBooking } from '../../../booking.core/src/entities/IBooking';
import { IHandler } from '../../../booking.persistance.core/src/IHandler';


export class BookingController implements IBookingController 
{
    Get(predicate: IBooking): IBooking[] 
    {
        let result : IBooking[];
        result = this.handler.GetMultiple(predicate);
        return result;
    }
    Post(entity: IBooking): boolean 
    {
        if (entity.user == undefined || entity.room == undefined) 
        {
            console.log("Reveived Booking POST request with invalid input.");
            console.log(entity);
            return false;
        }
        if (entity.user.id == undefined || entity.room.id == undefined) 
        {
            console.log("Reveived Booking POST request with invalid input.");
            console.log(entity);
            return false;
        }

        let user = this.handler.GetOne(entity.user);
        user.bookings.forEach(element => {
            if(!element.checkNoOverlab(entity))
            {
                console.log("User has an overlapping booking.");
                console.log(user);
                console.log(entity);
                return false;
            }
        });

        let room = this.handler.GetOne(entity.room);
        room.bookings.forEach(element => {
            if(!element.checkNoOverlab(entity)) 
            {
                console.log("Room has an overlapping booking.");
                console.log(room);
                console.log(entity);
                return false;
            }
        });

        let result = this.handler.Create(entity);
        return true;
    }
    Put(entity: IBooking): boolean 
    {
        throw new Error('Method not implemented.');
    }
    Delete(predicate: IBooking): boolean 
    {
        throw new Error('Method not implemented.');
    }

    handler : IHandler;

    /**
     *
     */
    constructor() 
    {
        this.handler = new BookingHandler();
    }
}