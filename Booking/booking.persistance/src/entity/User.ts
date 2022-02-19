import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { IBooking } from "../../../booking.core/src/entities/IBooking";
import { IUser } from "../../../booking.core/src/entities/IUser";
import { Booking } from './Booking';

@Entity()
export class User implements IUser
{    
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
}
