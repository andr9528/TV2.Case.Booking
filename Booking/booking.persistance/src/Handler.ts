import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import { IEntity } from "../../booking.persistance.core/src/IEntity";
import { IHandler } from '../../booking.persistance.core/src/IHandler';
import { Booking } from "./entity/Booking";
import { IBooking } from '../../booking.core/src/entities/IBooking';
import { User } from "./entity/User";
import { IUser } from "../../booking.core/src/entities/IUser";
import { IRoom } from "../../booking.core/src/entities/IRoom";
import { Room } from "./entity/Room";

export class BookingHandler implements IHandler 
{
    public GetMultiple<T extends IEntity>(predicate: T): T[] {
        let type = typeof(predicate)

        switch (type) 
        {
            case Booking.name :
                return <T[]>this.GetBooking(<IBooking><unknown>predicate, false);
            case User.name : 
                return <T[]>this.GetUser(<IUser><unknown>predicate, false);
            case Room.name :
                return <T[]>this.GetRoom(<IRoom><unknown>predicate, false);            
        }
    }
    
    public GetOne<T extends IEntity>(predicate: T): T {
        let type = typeof(predicate)

        switch (type) 
        {
            case Booking.name :
                return <T>this.GetBooking(<IBooking><unknown>predicate, true);
            case User.name : 
                return <T>this.GetUser(<IUser><unknown>predicate, true);
            case Room.name :
                return <T>this.GetRoom(<IRoom><unknown>predicate, true);            
        }
    }

    private GetBooking(predicate : IBooking, onlyOne : boolean) : any 
    {
        let result = null;
        this.PerformActionOnConnection(async (connection) => 
        {
            let query = await connection.getRepository(Booking).createQueryBuilder('booking').
                leftJoinAndSelect('booking.user', 'user').leftJoinAndSelect('booking.room','room')
                .where(predicate);

            if (onlyOne) result = await query.getOne();
            else result = await query.getMany();            
        });
        return result;
    }

    private GetUser(predicate: IUser, onlyOne: boolean) : any 
    {
        let result = null;
        this.PerformActionOnConnection(async (connection) => 
        {
            let query = await connection.getRepository(User).createQueryBuilder('user').
                leftJoinAndSelect('user.bookings', 'bookings').where(predicate);

            if (onlyOne) result = await query.getOne();
            else result = await query.getMany();            
        });
        return result;
    }

    private GetRoom(predicate: IRoom, onlyOne: boolean) : any 
    {
        let result = null;
        this.PerformActionOnConnection(async (connection) => 
        {
            let query = await connection.getRepository(Room).createQueryBuilder('room').
                leftJoinAndSelect('room.bookings', 'bookings').where(predicate);

            if (onlyOne) result = await query.getOne();
            else result = await query.getMany();            
        });
        return result;
    }
    
    public Create<T extends IEntity>(entity: T): T {
        if (entity.id == 0) throw new Error("Id of a new entity has to be 0");

        let result = null;
        this.PerformActionOnConnection(async (connection) => 
        {
            result = await connection.manager.save(entity);            
        });
        return <T>result;
    }
    public Update<T extends IEntity>(entity: T): T {
        if (entity.id != 0) throw new Error("Id of an updating entity cannot be 0");

        let result = null;
        this.PerformActionOnConnection(async (connection) => 
        {
            result = await connection.manager.save(entity);            
        });
        return <T>result;
    }
    public Delete<T extends IEntity>(entity: T): T {
        if (entity.id != 0) throw new Error("Id of a deleting entity cannot be 0");

        let result = null;
        this.PerformActionOnConnection(async (connection) => 
        {
            result = await connection.manager.remove(entity);            
        });
        return <T>result;
    }
    
    private PerformActionOnConnection(action : IConnectionProcessor) : any 
    {
        createConnection().then(async connection => action(connection) ).catch(error => console.log(error));
    }

}

interface IConnectionProcessor 
{
    (connection : Connection): any
}