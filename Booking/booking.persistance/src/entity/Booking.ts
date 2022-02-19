import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { IBooking } from '../../../booking.core/src/entities/IBooking';
import { IRoom } from "../../../booking.core/src/entities/IRoom";
import { IUser } from '../../../booking.core/src/entities/IUser';
import { User } from "./User";
import { Room } from './Room';

@Entity()
export class Booking implements IBooking 
{
    @ManyToOne(() => User, user => user.bookings, {
        eager: true
    })
    public user: IUser;
    
    @ManyToOne(() => Room, room => room.bookings, {
        eager: true
    })
    public room: IRoom;

    @Column()
    public from: Date;
    
    @Column()
    public to: Date;
       
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public version: number;
    
    public checkNoOverlab(otherBooking: IBooking): boolean {
        throw new Error("Method not implemented.");
    }
}