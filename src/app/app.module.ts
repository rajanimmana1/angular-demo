import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe'
import { StarComponent } from './shared/star.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent , ConvertToSpacePipe, StarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
