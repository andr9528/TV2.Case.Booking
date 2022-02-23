import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { IBooking } from '../../../booking.core/src/entities/IBooking';
import { IRoom } from '../../../booking.core/src/entities/IRoom';
import { Booking } from "./Booking";

@Entity()
export class Room implements IRoom 
{
    @OneToMany(() => Booking, booking => booking.room, {
        eager: true
    })
    public bookings: IBooking[];
    
    @Column()
    public capacity: number;
    
    @PrimaryGeneratedColumn()
    public id: number;
    
    @Column()
    public version: number;    

    @Column()
    public title: string;   

    @Column()
    public location: string;
    
}