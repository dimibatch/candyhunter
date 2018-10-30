import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient} from "@angular/common/http";

import { map } from "rxjs/operators";
import { Candies } from "src/app/models/candies";

@Injectable({
  providedIn: 'root'
})
export class CandyListService {

  private serviceHttp: HttpClient;
	 
  constructor( private http: HttpClient) {
 this.serviceHttp = http;
}

public getAllCandies(apiUrl): Observable<Candies> {


 // let apiUrl = "https://fr-en.openfoodfacts.org/category/candies.json";
 
 return this.serviceHttp.get(apiUrl).pipe(
   map(
     (data: any) => {
       let allCandies: Candies = new Candies ();
       let nameTab = new Array();
       let idTab = new Array();
       let imgTab = new Array();

       for(let i = 0 ; i < 20 ; i += 1){
         nameTab.push(data.products[i]['product_name']);

         idTab[i]   = data.products[i]['_id'];
         imgTab[i]  =	data.products[i]['image_small_url'];
       }

       allCandies.productName = nameTab;
       allCandies.candyId = idTab;
       allCandies.imgUrl =	imgTab;
       
       return allCandies;
       
     }
   )
 )
}
}
