/**
 * Created by 212544474 on 2/5/2016.
 */
import {Pipe} from "angular2/core";

@Pipe({
    name:"started"
})


export class StartedPipe{
    transform(value, [status]){
         var list = value.filter((item)=> item.status === status)
         console.log("list: " , list);
        return list;
    }
}


