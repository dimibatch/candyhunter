import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListeBonbonsComponent } from './components/liste-bonbons/liste-bonbons.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeBonbonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
