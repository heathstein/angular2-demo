/**
 * Created by 212544474 on 2/5/2016.
 */
import {Pipe} from "angular2/core";


@Pipe({
    name:"search"
})


export class SearchPipe{
    transform(value, [term]){
         var list = value.filter((item)=> item.title.startsWith(term))
        //console.log(" value[0].title: " ,  value[0].title);
        //console.log("value[0].title: " , value[0].title.startsWith('e'));
        //console.log("list: " , list);
        return list;
    }
}


