import { IEntity } from "../../../booking.persistance.core/src/IEntity";
import { IBooking } from "./IBooking";
import { IRoom } from "./IRoom";
export interface IUser extends IEntity {
    bookings: IBooking[];
    name: string;
    getCommonRooms(): IRoom[];
}
//# sourceMappingURL=IUser.d.ts.map