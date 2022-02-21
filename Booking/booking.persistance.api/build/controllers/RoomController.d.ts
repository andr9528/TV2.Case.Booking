import { IRoomController } from '../../../booking.core/src/controllers/IRoomController';
import { IRoom } from '../../../booking.core/src/entities/IRoom';
import { IHandler } from '../../../booking.persistance.core/src/IHandler';
export declare class RoomController implements IRoomController {
    Get(predicate: IRoom): IRoom[];
    Post(entity: IRoom): boolean;
    Put(entity: IRoom): boolean;
    Delete(predicate: IRoom): boolean;
    handler: IHandler;
    /**
     *
     */
    constructor();
}
//# sourceMappingURL=RoomController.d.ts.map