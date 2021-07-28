import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "dateShorten"
})
export class DatePipe implements PipeTransform{
    
    transform(value: any, spec: string){
        if(spec === "date"){
            return value.split("")[8] + value.split("")[9];
        }else if (spec === "month"){
            let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return monthNames[parseInt(value.split("")[5] + value.split("")[6]) - 1]
        }
  
    }
}