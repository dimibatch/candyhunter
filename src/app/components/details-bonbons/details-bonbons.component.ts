import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ApiDetailsService } from '../../services/api-details.service';
import { LocationService } from '../../services/location.service';
import { Details } from '../../models/details';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-details-bonbons',
  templateUrl: './details-bonbons.component.html',
  styleUrls: ['./details-bonbons.component.css']
})
export class DetailsBonbonsComponent implements OnInit {

	public myLocation: Location = new Location();
	public coordonee = new Array;

  @Input() id: string;
    
  public displayMap: boolean = false;
  public etatButton: string = 'Afficher sur la carte';

  public errorMsg: string;

  public currentLocation: Coordinates = null;
  public longitude: any;
  public latitude: any;

  public details = new Details();
  public location = new Location();
	
 	constructor(
		  private param_service: ApiDetailsService,
      private ref: ChangeDetectorRef, 
      private geoLocationService: LocationService 
		  ) { }
	
  ngOnInit() {
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
// =================================================================================
        if(this.details.code == '3103220043158' || this.details.code == '4601798030055'){
          this.details.collected = true;
        }else{
          this.details.collected = false;
        }
// =================================================================================    

    });
  }

    public getDisplayMap() {
      this.sendLocation()
      if (this.displayMap) {
        this.displayMap = false;
        this.etatButton = 'Afficher sur la carte';

      } else {
        this.displayMap = true;
        this.etatButton = 'Fermer la carte';
      }
    }

    public sendLocation() {        
        let self = this;
        const accuracy = { enableHighAccuracy: true };
        self.geoLocationService.getLocation(accuracy).subscribe(
          function (position) {
            self.currentLocation = position;
            self.latitude = position.coords.latitude;
            self.longitude = position.coords.longitude;
            self.ref.detectChanges();
            // console.log(self.coords);

            this.location = this.geoLocationService.getPositionInfo(self.latitude, self.longitude);
            // console.log('city: ' + this.location.city);            
          },
          function (error) {
            self.errorMsg = error;
            self.ref.detectChanges();
          }
        )
      }

}