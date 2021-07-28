
import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "catSpentPipe"
})
export class CatSpentPipe implements PipeTransform{
    
    transform(cat: any){
        for (const item of cat){
            console.log(cat);
            
            if( item.category_name !== "Salary" || item.category_name !== "Other"){
                console.log(item)
              return item
            } }
    }
}