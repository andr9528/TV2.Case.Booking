import { IBookingController } from '../../../booking.core/src/controllers/IBookingController';
import { IBooking } from '../../../booking.core/src/entities/IBooking';
import { IHandler } from '../../../booking.persistance.core/src/IHandler';

export class BookingController implements IBookingController 
{
    Get(predicate: IBooking): IBooking[] {
        throw new Error('Method not implemented.');
    }
    Post(entity: IBooking): boolean {
        throw new Error('Method not implemented.');
    }
    Put(entity: IBooking): boolean {
        throw new Error('Method not implemented.');
    }
    Delete(predicate: IBooking): boolean {
        throw new Error('Method not implemented.');
    }

    handler : IHandler;

    /**
     *
     */
    constructor(handler : IHandler) 
    {
        this.handler = handler
    }
}