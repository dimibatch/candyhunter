import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

// On initialise la latitude et la longitude de Paris (centre de la carte)

	@Input() city:string;
	@Input() lat: number;
	@Input() lon: number;

	//public lat:number = 48.852969;
	//public lon:number = 2.349903;

	

	public latiLOngi = [48.463, 1.011712];

	constructor() { }

	ngOnInit() {
		// création de la map
		let map = L.map('map').setView([this.lat, this.lon], 6);
			console.log(this.lat, this.lon);
		// création du calque images
		L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
		maxZoom: 20
		}).addTo(map);

		// ajout d'un markeur
		let marker = L.marker([this.lat, this.lon]).addTo(map);
		let paris = L.marker([ 48.852969, 2.349903]).addTo(map);

		// ajout d'un popup
		marker.bindPopup('<h5> La loupe. </h5>');
		paris.bindPopup('<h5> Paris. </h5>');
		
	}


}
