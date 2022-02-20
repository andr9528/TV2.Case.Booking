import { IUserController } from '../../../booking.core/src/controllers/IUserController';
import { IUser } from '../../../booking.core/src/entities/IUser';
import { IHandler } from '../../../booking.persistance.core/src/IHandler';

export class UserController implements IUserController 
{
    Get(predicate: IUser): IUser[] {
        throw new Error('Method not implemented.');
    }
    Post(entity: IUser): boolean {
        return true
    }
    Put(entity: IUser): boolean {
        throw new Error('Method not implemented.');
    }
    Delete(predicate: IUser): boolean {
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