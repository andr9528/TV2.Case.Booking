import { IUserController } from '../../../booking.core/src/controllers/IUserController';
import { IUser } from '../../../booking.core/src/entities/IUser';
import { IHandler } from '../../../booking.persistance.core/src/IHandler';
export declare class UserController implements IUserController {
    Get(predicate: IUser): IUser[];
    Post(entity: IUser): boolean;
    Put(entity: IUser): boolean;
    Delete(predicate: IUser): boolean;
    handler: IHandler;
    /**
     *
     */
    constructor();
}
//# sourceMappingURL=UserController.d.ts.map