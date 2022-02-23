import { IBooking } from "../../../../booking.core/src/entities/IBooking";
import { IRoom } from "../../../../booking.core/src/entities/IRoom";
export declare class Room implements IRoom {
    CLASSNAME: string;
    bookings: IBooking[];
    capacity: number;
    id: number;
    version: number;
    title: string;
    location: string;
    /**
     *
     */
    constructor();
}
//# sourceMappingURL=Room.d.ts.map