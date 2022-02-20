import { IEntity } from "../../../booking.persistance.core/src/IEntity";


export interface IController<T extends IEntity> 
{
    Get(predicate: T) : T[]
    Post(entity : T) : boolean
    Put(entity : T) : boolean
    Delete(predicate : T) : boolean
}