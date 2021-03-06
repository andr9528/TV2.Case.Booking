import { BookingHandler } from '../persistance/BookingHandler';
import { IUserController } from '../../../booking.core/src/controllers/IUserController';
import { IUser } from '../../../booking.core/src/entities/IUser';
import { IHandler } from '../../../booking.persistance.core/src/IHandler';

export class UserController implements IUserController 
{
    Get(predicate: IUser): IUser[] 
    {
        let result : IUser[];
        result = this.handler.GetMultiple(predicate);
        return result;
    }
    Post(entity: IUser): boolean 
    {
        let result = this.handler.Create(entity);
        return true;
    }
    Put(entity: IUser): boolean 
    {
        throw new Error('Method not implemented.');
    }
    Delete(predicate: IUser): boolean 
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