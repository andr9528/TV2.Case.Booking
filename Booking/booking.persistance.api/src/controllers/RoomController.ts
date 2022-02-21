import { IRoomController } from '../../../booking.core/src/controllers/IRoomController';
import { IRoom } from '../../../booking.core/src/entities/IRoom';
import { IHandler } from '../../../booking.persistance.core/src/IHandler';
import { BookingHandler } from '../../../booking.persistance/src/BookingHandler';

export class RoomController implements IRoomController
{
    Get(predicate: IRoom): IRoom[] 
    {
        throw new Error('Method not implemented.');
    }
    Post(entity: IRoom): boolean 
    {
        let result = this.handler.Create(entity);
        return true;
    }
    Put(entity: IRoom): boolean 
    {
        throw new Error('Method not implemented.');
    }
    Delete(predicate: IRoom): boolean 
    {
        throw new Error('Method not implemented.');
    }

    handler : IHandler;

    /**
     *
     */
    constructor() 
    {
        this.handler = new BookingHandler();
    }
} 