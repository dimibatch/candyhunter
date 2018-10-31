import { Component, OnInit, Input } from '@angular/core';
import { ApiDetailsService } from '../../services/api-details.service';
import { Details } from '../../models/details';

import {Location} from 'src/app/models/location';
import { LocationService} from 'src/app/services/location.service';

@Component({
  selector: 'app-details-bonbons',
  templateUrl: './details-bonbons.component.html',
  styleUrls: ['./details-bonbons.component.css']
})
export class DetailsBonbonsComponent implements OnInit {

	public myLocation: Location = new Location();
	public coordonee = new Array;

  	@Input() id: string;
	
 	constructor(
		  private param_service: ApiDetailsService,
		  private locationService: LocationService
		  ) { }

  	public details = new Details();

  ngOnInit() {

// Recuperation des coordeonnée géographique

	this.coordonee = this.locationService.getMylocation()
	console.log(this.coordonee);
// Recuperation de l'Adress 
//======================================================
	this.locationService.getPositionInfo(1.011712, 48.463).subscribe(
		(info: any) =>{
		this.myLocation = info;
	})

// 	Recuperation des information alimentaire de chaque bonbon
    return this.param_service.getDetails(this.id).subscribe(
      (data) => {
        this.details = data;
        this.details.product_name = data['product']['product_name'];
        this.details.code = data['product']['code'];
        this.details.category = data['product']['categories'];
        this.details.small_image = data['product']['selected_images']['front']['small']['fr'];
        this.details.ingredients = data['product']['ingredients_text'];
        this.details.energy = data['product']['nutriments']['energy_100g'];
        this.details.sugar = data['product']['nutriments']['carbohydrates_100g'];
        this.details.fat = data['product']['nutriments']['fat_100g'];
        this.details.proteins = data['product']['nutriments']['proteins_100g'];
        this.details.score = data['product']['nutriments']['nutrition-score-fr_100g'];
        // Mots-clés
        this.details.keywords = data['product']['_keywords'];

      }
	);
	
  }

}
