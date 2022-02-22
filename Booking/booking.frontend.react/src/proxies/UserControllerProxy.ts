import { IUserController } from '../../../booking.core/src/controllers/IUserController';
import { IUser } from '../../../booking.core/src/entities/IUser';
import axios from 'axios';

// Very likely needs to use async/await pattern for methods, to return correct values.
export class UserControllerProxy implements IUserController 
{
    // Should be loaded from a central configuration  file. Very likely a Json file.
    url = "http://localhost:3000/";
    instance = axios.create(
        {
            baseURL: this.url,
            timeout: 15000
        });

    Get(predicate: IUser): IUser[] {
        let queryParameters : string[] = new Array<string>();
        let result : IUser[] = new Array<IUser>();
        
        if (predicate.name !== undefined) queryParameters.push("name=" + predicate.name);
        if (predicate.id !== undefined) queryParameters.push("id=" + predicate.id.toString());
        if (predicate.version !== undefined) queryParameters.push("version=" + predicate.version.toString());

        let joined = queryParameters.join("&");
        let path = "?q=" + joined;

        this.instance.get("booking" + path).then(response => 
            {
                let data = response.data;
                let entities = JSON.parse(data);
                result = entities as IUser[];

            }).catch(error => 
                {
                    console.log(error)
                });

        return result;
    }
    Post(entity: IUser): boolean {
        let result : boolean = false
        this.instance.post("user", entity).then(response => 
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
    Put(entity: IUser): boolean {
        throw new Error('Method not implemented.');
    }
    Delete(predicate: IUser): boolean {
        throw new Error('Method not implemented.');
    }

}