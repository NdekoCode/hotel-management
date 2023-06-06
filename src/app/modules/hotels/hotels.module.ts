import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { StarRatingComponent } from './../../shared/components/star-rating/star-rating.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelsComponent } from './hotels.component';
import { SingleHotelComponent } from './single-hotel/single-hotel.component';

@NgModule({
	declarations: [
		HotelCardComponent,
		HotelListComponent,
		SingleHotelComponent,
		HotelsComponent,
		HotelsComponent,
		StarRatingComponent,
	],
	imports: [SharedModule, HotelRoutingModule],
	exports: [],
})
export class HotelsModule {}
