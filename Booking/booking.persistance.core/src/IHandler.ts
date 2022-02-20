import { IEntity } from './IEntity';
export interface IHandler 
{
    GetMultiple<T extends IEntity>(predicate : T) : T[]
    GetOne<T extends IEntity>(predicate : T) : T
    Create<T extends IEntity>(entity : T) : T
    Update<T extends IEntity>(entity : T) : T
    Delete<T extends IEntity>(entity : T) : T
}
