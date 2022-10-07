import { Pipe,PipeTransform } from "@angular/core";
import { pipe } from "rxjs";
@Pipe({name:'trim'})
export class filterPipe implements PipeTransform {
    transform(value: any, args: string):any {
        // console.log("sorting")
        // if(args == "filter"){
        return value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,);
    }
    
    }

