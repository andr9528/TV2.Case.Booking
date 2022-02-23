import { IBooking } from '../../../booking.core/src/entities/IBooking';
import { IRoom } from '../../../booking.core/src/entities/IRoom';
import { IUser } from '../../../booking.core/src/entities/IUser';

export class User implements IUser 
{
    public CLASSNAME: string;

    public bookings: IBooking[] = new Array<IBooking>();
    public name: string;
    public id: number;
    public version: number;

    constructor(name : string, id : number = 0, version : number = 0) 
    {
        this.name = name;
        this.id = id;
        this.version = version;    

        this.CLASSNAME = "User";
    }

    public getCommonRooms(): IRoom[] 
    {
        // count, roomId, Room object
        let commonRooms : RoomCounter[] = new Array<RoomCounter>();
        let result : IRoom[] = new Array<IRoom>();

        this.bookings.forEach(element => {
            if (commonRooms.some(e => e.roomId === element.roomId)) 
            {
                let common = commonRooms.find(e => e.roomId === element.roomId);
                if (common !== undefined) 
                {
                    common.count = common.count + 1;
                }                
            }
            else 
            {
                commonRooms.push({ count: 1, roomId: element.roomId, room: element.room});
            }
        });
        // Sort in decending order.
        commonRooms = commonRooms.sort((a, b) => (a.count > b.count) ? 1 : -1);
        commonRooms.forEach(element => {result.push(element.room)})
        return result;

    };    
}

interface RoomCounter 
{
    count: number
    roomId : number
    room: IRoom
}