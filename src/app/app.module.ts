import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faSort, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { CountryService } from './country.service';
library.add(faCoffee);
library.add(faSortUp);
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, FontAwesomeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CountryService]
})
export class AppModule { }
