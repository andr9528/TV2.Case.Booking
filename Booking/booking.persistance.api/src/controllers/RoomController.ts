import { IRoomController } from '../../../booking.core/src/controllers/IRoomController';
import { IRoom } from '../../../booking.core/src/entities/IRoom';
import { IHandler } from '../../../booking.persistance.core/src/IHandler';

export class RoomController implements IRoomController
{
    Get(predicate: IRoom): IRoom[] {
        throw new Error('Method not implemented.');
    }
    Post(entity: IRoom): boolean {
        throw new Error('Method not implemented.');
    }
    Put(entity: IRoom): boolean {
        throw new Error('Method not implemented.');
    }
    Delete(predicate: IRoom): boolean {
        throw new Error('Method not implemented.');
    }

    handler : IHandler;

    /**
     *
     */
    constructor(handler : IHandler) 
    {
        this.handler = handler
    }
} 