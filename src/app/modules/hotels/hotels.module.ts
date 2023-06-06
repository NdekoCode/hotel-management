import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarRatingComponent } from './../../shared/components/star-rating/star-rating.component';
import { ReplaceCommaPipe } from './../../shared/pipes/replace-comma.pipe';

import { SharedModule } from '../shared/shared.module';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelsComponent } from './hotels/hotels.component';
import { SingleHotelComponent } from './single-hotel/single-hotel.component';

@NgModule({
	declarations: [
		HotelCardComponent,
		HotelListComponent,
		SingleHotelComponent,
		HotelsComponent,
		HotelsComponent,
		ReplaceCommaPipe,
		StarRatingComponent,
	],
	imports: [CommonModule, SharedModule],
})
export class HotelsModule {}
