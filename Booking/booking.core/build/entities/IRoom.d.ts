import { IEntity } from "../../../booking.persistance.core/src/IEntity";
import { IBooking } from "./IBooking";
export interface IRoom extends IEntity {
    bookings: IBooking[];
    capacity: number;
    title: string;
}
//# sourceMappingURL=IRoom.d.ts.map