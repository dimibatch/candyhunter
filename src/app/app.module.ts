import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CandyListService} from 'src/app/services/candy-list.service'
import { AppComponent } from './app.component';
import { ListeBonbonsComponent } from './components/liste-bonbons/liste-bonbons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeBonbonsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [CandyListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
