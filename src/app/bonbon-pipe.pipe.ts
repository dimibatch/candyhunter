import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonbonPipe'
})
export class BonbonPipePipe implements PipeTransform {

  transform(bonbons: any[], param_bonbon: string= ""): any {
    
    let results: any[] = [];
    let current : string;
    let i :number = 0;
    
    if (param_bonbon ==""){
      return bonbons;
    }
    else{
      for( i = 0 ; i < bonbons.length; i++){

        current = bonbons[i].productName;
  
        if (current.toLowerCase().indexOf(param_bonbon.toLowerCase()) > -1){
          results.push(bonbons[i]);
        }
        
      }
      console.log(param_bonbon + "hahahaha");
      return results;
    }
    
  }

}
