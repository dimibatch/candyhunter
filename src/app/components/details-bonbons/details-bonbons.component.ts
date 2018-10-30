import { Component, OnInit, Input } from '@angular/core';
import { ApiDetailsService } from '../../services/api-details.service';
import { Details } from '../../models/details';

@Component({
  selector: 'app-details-bonbons',
  templateUrl: './details-bonbons.component.html',
  styleUrls: ['./details-bonbons.component.css']
})
export class DetailsBonbonsComponent implements OnInit {

  @Input() id: string = '3596710447992';

  constructor(private param_service: ApiDetailsService) { }

  public details = new Details();

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

      }
    );

  }

}
