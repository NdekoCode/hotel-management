import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './modules/hotels/hotels/hotels.component';
import { SingleHotelComponent } from './modules/hotels/single-hotel/single-hotel.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HotelGuard } from './shared/guards/hotel.guard';

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
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
