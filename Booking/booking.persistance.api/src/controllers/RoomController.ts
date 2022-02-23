import { BookingHandler } from '../persistance/BookingHandler';
import { IRoomController } from '../../../booking.core/src/controllers/IRoomController';
import { IRoom } from '../../../booking.core/src/entities/IRoom';
import { IHandler } from '../../../booking.persistance.core/src/IHandler';

export class RoomController implements IRoomController
{
    Get(predicate: IRoom): IRoom[] 
    {
        let result : IRoom[];
        result = this.handler.GetMultiple(predicate);
        return result;
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