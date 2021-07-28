
import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "catSpentPipe"
})
export class CatSpentPipe implements PipeTransform{
    
    transform(cat: any){
        for (const item of cat){            
            if( item.category_name !== "Salary" || item.category_name !== "Other"){
              return item
            } }
    }
}