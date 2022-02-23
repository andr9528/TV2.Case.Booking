import { IBooking } from "../../../../booking.core/src/entities/IBooking";
import { IRoom } from "../../../../booking.core/src/entities/IRoom";
import { IUser } from "../../../../booking.core/src/entities/IUser";
export declare class User implements IUser {
    CLASSNAME: string;
    getCommonRooms(): IRoom[];
    bookings: IBooking[];
    name: string;
    version: number;
    id: number;
    /**
     *
     */
    constructor();
}
//# sourceMappingURL=User.d.ts.map