import { Injectable } from '@angular/core';

import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MapService {
// On initialise la latitude et la longitude de Paris (centre de la carte)
	public lat = 48.852969;
	public lon = 2.349903;
	public macarte = null;

	constructor() { }
}
