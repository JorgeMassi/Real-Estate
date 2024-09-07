import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListingComponent } from './components/property/listing/listing.component';
import { PropertyService } from './services/property-service/property.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/property/cards/cards.component';


export const routes: Routes = [
  {path: 'listing', component:ListingComponent}, 
  {path: 'cards', component: CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [PropertyService]
})
export class AppRoutingModule { }
