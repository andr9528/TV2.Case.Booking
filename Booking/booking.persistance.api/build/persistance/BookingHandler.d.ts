import "reflect-metadata";
import { IHandler } from "../../../booking.persistance.core/src/IHandler";
import { IEntity } from "../../../booking.persistance.core/src/IEntity";
export declare class BookingHandler implements IHandler {
    GetMultiple<T extends IEntity>(predicate: T): T[];
    GetOne<T extends IEntity>(predicate: T): T;
    private GetBooking;
    private GetUser;
    private GetRoom;
    Create<T extends IEntity>(entity: T): T;
    Update<T extends IEntity>(entity: T): T;
    Delete<T extends IEntity>(entity: T): T;
    private PerformActionOnConnection;
}
//# sourceMappingURL=BookingHandler.d.ts.map