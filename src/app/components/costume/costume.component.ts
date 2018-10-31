import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costume',
  templateUrl: './costume.component.html',
  styleUrls: ['./costume.component.css']
})
export class CostumeComponent implements OnInit {

  nomDeguisement:string;
	imgDeguisement:string;
	public deguisements :any[]= [
		{
		  nom : 'Loup-garou',
		  image : 'https://images-na.ssl-images-amazon.com/images/I/81TaHIUgxNL._SY550_.jpg'
		},
		{
		  nom : 'Sorciere',
		  image : 'https://www.alaportebleue.fr/3566-thickbox_default/deguisement-sorciere-femme-halloween.jpg'
		},
		{
		  nom : 'Crocodile',
		  image : 'https://li8.rightinthebox.com/images/384x384/201406/qkmlkj1402658326152.jpg'
		}];

  constructor() { }

  ngOnInit() {
  }

  public changeDeguisement():void{
		let random=Math.floor(Math.random() * 3);
		this.nomDeguisement = this.deguisements[random].nom;
		this.imgDeguisement = this.deguisements[random].image;
		// return this.deguisements[random].nom;
  }
  
  

}
