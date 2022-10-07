import { Pipe,PipeTransform } from "@angular/core";
import { pipe } from "rxjs";
@Pipe({name:'sort'})
export class SortPipe implements PipeTransform {
    transform(value: any, args: string):any {
        // console.log("sorting")
        if(args == "ascending"){
        return value.sort();
    }
    else if(args == "descending"){
        return value.sort().reverse()
    }
}
}