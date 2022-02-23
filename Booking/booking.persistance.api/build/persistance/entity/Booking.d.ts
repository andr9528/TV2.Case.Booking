import { IBooking } from "../../../../booking.core/src/entities/IBooking";
import { IUser } from "../../../../booking.core/src/entities/IUser";
import { IRoom } from "../../../../booking.core/src/entities/IRoom";
export declare class Booking implements IBooking {
    CLASSNAME: string;
    user: IUser;
    get userId(): number;
    room: IRoom;
    get roomId(): number;
    private _from;
    get from(): Date;
    set from(value: Date);
    private _to;
    get to(): Date;
    set to(value: Date);
    id: number;
    version: number;
    checkNoOverlab(otherBooking: IBooking): boolean;
    /**
     *
     */
    constructor();
}
//# sourceMappingURL=Booking.d.ts.map