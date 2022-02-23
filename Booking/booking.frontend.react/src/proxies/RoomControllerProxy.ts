import { IRoomController } from '../../../booking.core/src/controllers/IRoomController';
import { IRoom } from '../../../booking.core/src/entities/IRoom';
import axios from 'axios';

// Very likely needs to use async/await pattern for methods, to return correct values.
export class RoomControllerProxy implements IRoomController 
{
    // Should be loaded from a central configuration  file. Very likely a Json file.
    url = "http://localhost:3000/";
    instance = axios.create(
        {
            baseURL: this.url,
            timeout: 15000
        });

    Get(predicate: IRoom): IRoom[] {
        let queryParameters : string[] = new Array<string>();
        let result : IRoom[] = new Array<IRoom>();
        
        if (predicate.title !== undefined) queryParameters.push("title=" + predicate.title);
        if (predicate.capacity !== undefined) queryParameters.push("capacity=" + predicate.capacity.toString());
        if (predicate.id !== undefined) queryParameters.push("id=" + predicate.id.toString());
        if (predicate.version !== undefined) queryParameters.push("version=" + predicate.version.toString());

        let joined = queryParameters.join("&");
        let path = "?" + joined;

        this.instance.get("booking" + path).then(response => 
            {
                let data = response.data;
                let entities = JSON.parse(data);
                result = entities as IRoom[];

            }).catch(error => 
                {
                    console.log(error)
                });

        return result;
    }
    Post(entity: IRoom): boolean {
        let result : boolean = false
        this.instance.post("room", entity).then(response => 
            {
                let data = response.data;
                console.log(data);
            }).catch(error => 
                {
                    console.log(error);
                    result = false;
                })
        return result;
    }
    Put(entity: IRoom): boolean {
        throw new Error('Method not implemented.');
    }
    Delete(predicate: IRoom): boolean {
        throw new Error('Method not implemented.');
    }

}