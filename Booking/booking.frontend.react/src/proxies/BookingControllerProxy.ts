// https://javascript.plainenglish.io/frontend-api-calls-with-typescript-and-axios-68792d1e63c2

import { IBookingController } from '../../../booking.core/src/controllers/IBookingController';
import { IBooking } from '../../../booking.core/src/entities/IBooking';
import axios from 'axios';

// Very likely needs to use async/await pattern for methods, to return correct values.
export class BookingControllerProxy implements IBookingController 
{
    // Should be loaded from a central configuration  file. Very likely a Json file.
    url = "http://localhost:3000/";
    instance = axios.create(
        {
            baseURL: this.url,
            timeout: 15000
        });

    Get(predicate: IBooking): IBooking[] 
    {
        let queryParameters : string[] = new Array<string>();
        let result : IBooking[] = new Array<IBooking>();
        
        if (predicate.from !== undefined) queryParameters.push("from=" + predicate.from.toISOString());
        if (predicate.to !== undefined) queryParameters.push("to=" + predicate.to.toISOString());
        if (predicate.id !== undefined) queryParameters.push("id=" + predicate.id.toString());
        if (predicate.version !== undefined) queryParameters.push("version=" + predicate.version.toString());
        if (predicate.userId !== undefined) queryParameters.push("userId=" + predicate.userId.toString());
        if (predicate.roomId !== undefined) queryParameters.push("roomId=" + predicate.roomId.toString());

        let joined = queryParameters.join("&");
        let path = "?" + joined;

        this.instance.get("booking" + path).then(response => 
            {
                let data = response.data;
                let entities = JSON.parse(data);
                result = entities as IBooking[];

            }).catch(error => 
                {
                    console.log(error)
                });

        return result;
    }
    Post(entity: IBooking): boolean 
    {
        let result : boolean = false
        this.instance.post("booking", entity).then(response => 
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
    Put(entity: IBooking): boolean {
        throw new Error('Method not implemented.');
    }
    Delete(predicate: IBooking): boolean {
        throw new Error('Method not implemented.');
    }

}