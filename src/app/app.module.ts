import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { CandyListService} from 'src/app/services/candy-list.service'
import { AppComponent } from './app.component';
import { ListeBonbonsComponent } from './components/liste-bonbons/liste-bonbons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsBonbonsComponent } from './components/details-bonbons/details-bonbons.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeBonbonsComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent,
    DetailsBonbonsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      [
      {
        "path": "",
        "component": LandingPageComponent,
        "pathMatch": 'full'
      },
      {
        "path": "liste-bonbons",
        "component": ListeBonbonsComponent,
        "pathMatch": 'full'
      },
      {
        "path": "details-bonbons",
        "component": DetailsBonbonsComponent,
        "pathMatch": 'full'
      },
      {
        "path": "map",
        "component" : MapComponent,
        "pathMatch" : 'full'
      }
    ],
    {
      'useHash': true
    }
    )
  ],
  providers: [CandyListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
