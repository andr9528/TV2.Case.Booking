import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { IBooking } from "../../../../booking.core/src/entities/IBooking";
import { IRoom } from "../../../../booking.core/src/entities/IRoom";
import { IUser } from "../../../../booking.core/src/entities/IUser";
import { Booking } from './Booking';

@Entity()
export class User implements IUser
{
    @Column({select: false})
    public CLASSNAME: string;

    getCommonRooms(): IRoom[] {
        throw new Error("Method not Supported.");
    }    
    @OneToMany(() => Booking, booking => booking.user, {
        eager: true
    })
    public bookings: IBooking[];
    
    @Column()
    public name: string;

    @Column()
    public version: number;

    @PrimaryGeneratedColumn()
    public id: number;

    /**
     *
     */
    constructor() {
        this.CLASSNAME = "User";
    }
}
