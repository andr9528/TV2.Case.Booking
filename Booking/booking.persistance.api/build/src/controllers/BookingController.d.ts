import { IBookingController } from '../../../booking.core/src/controllers/IBookingController';
import { IBooking } from '../../../booking.core/src/entities/IBooking';
import { IHandler } from '../../../booking.persistance.core/src/IHandler';
export declare class BookingController implements IBookingController {
    Get(predicate: IBooking): IBooking[];
    Post(entity: IBooking): boolean;
    Put(entity: IBooking): boolean;
    Delete(predicate: IBooking): boolean;
    handler: IHandler;
    /**
     *
     */
    constructor(handler: IHandler);
}
//# sourceMappingURL=BookingController.d.ts.map