import { IEntity } from "../../../booking.persistance.core/src/IEntity";
import { IRoom } from "./IRoom";
import { IUser } from "./IUser";

export interface IBooking extends IEntity
{
    user : IUser;
    room : IRoom
    from : Date
    to : Date

    
    /**
     * 
     * @param otherBooking other booking whose from and to Date to check that no overlab occurs with.
     * @returns true if no overlab between bookings.
     */
    checkNoOverlab(otherBooking : IBooking) : boolean
}