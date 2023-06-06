import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelGuard } from './../../shared/guards/hotel.guard';
import { HotelsComponent } from './hotels.component';
import { SingleHotelComponent } from './single-hotel/single-hotel.component';

const routes: Routes = [
	{
		path: '',
		component: HotelsComponent,
	},
	{
		path: 'hotels/:id',
		component: SingleHotelComponent,
		canActivate: [HotelGuard],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HotelRoutingModule {}
