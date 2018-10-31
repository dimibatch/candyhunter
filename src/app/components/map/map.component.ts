import { Component, OnInit, Input } from '@angular/core';
import { last } from '@angular/router/src/utils/collection';

// Declare ol variable globally
declare var ol: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

// On initialise la latitude et la longitude de Paris (centre de la carte)

	@Input() lat: number;
	@Input() lon: number;

	//public lat:number = 48.852969;
	//public lon:number = 2.349903;

	map: any;

	public macarte = null;

	constructor() { }

	ngOnInit() {
		this.map = new ol.Map({
			target: 'map',
			layers: [
				new ol.layer.Tile({
					source: new ol.source.OSM()
			    })
			],
			view: new ol.View({
				center: ol.proj.fromLonLat([2.349903, 48.852969]),
			  	zoom: 8
			})

			
		});
	}
	setCenter() {
		let view = this.map.getView();
		view.setCenter(ol.proj.fromLonLat([this.lon, this.lat]));
		view.setZoom(8);
	}

}
