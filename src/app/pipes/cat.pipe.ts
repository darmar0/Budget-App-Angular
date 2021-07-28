import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cat'
})
export class CatPipe implements PipeTransform {

  transform(value: any, inCat: any, outCat: any) {
  
  if(inCat){
    for (const item of inCat){
      if( value === item.id){
        return item.name
      }
    
  } 
  }
   if(outCat){
    for (const item of outCat){
      if( value === item.id){
        return item.name
        
      
    }
  }
   }
      
   
  }

}

  