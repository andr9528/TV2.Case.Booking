import { IEntity } from "../../../booking.persistance.core/src/IEntity";
import { IBooking } from "./IBooking";

export interface IUser extends IEntity
{
    bookings : IBooking[]
    name : string
}
