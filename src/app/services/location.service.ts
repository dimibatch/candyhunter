import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient} from "@angular/common/http";

import { Location } from "src/app/models/location";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LocationService {


	private serviceHttp: HttpClient;

	public infoPosition: string;

  	constructor( private http: HttpClient ) { 
  	this.serviceHttp = http;
  }
//  Récuperation des coordonée
   	showPosition(position): string[]{
   		let tabCoords:string[] = new Array();

  		let lat = position.coords.latitude;
  		let lon = position.coords.longitude;

  		tabCoords.push(lon);
  		tabCoords.push(lat);
  		console.log(tabCoords[0]);
  		console.log(tabCoords[1]);

  		return tabCoords
    }

	getMylocation(): any{
	  	let htmlElem = document.getElementById("...")
	  
	  	if( navigator.geolocation){
	  		 navigator.geolocation.getCurrentPosition(this.showPosition);
	  	}else{
	  		htmlElem.innerHTML = "La geolocalisation n'est pas supporter par ce navigateur."
	  	}


	}
// Recuperation des donnée de localisation 
	public getPositionInfo(lon,lat): Observable<Location> {

		let apiUrl = "https://api-adresse.data.gouv.fr/reverse/?lon="+ lon +"&lat="+ lat;
		return this.serviceHttp.get(apiUrl).pipe(
			map(
				(data: any) => {
					let adressInfo: Location = new Location();
					adressInfo.city =data.features[0]['properties']['city'];
					adressInfo.street = data.features[0]['properties']['street'];
					adressInfo.region = data.features[0]['properties']['context'];
					adressInfo.adresse = data.features[0]['properties']['label'];
					adressInfo.cityCode = data.features[0]['properties']['citycode'];

					return adressInfo ;
				}))
	}
}


