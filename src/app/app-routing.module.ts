import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SingleHotelComponent } from './pages/single-hotel/single-hotel.component';

const routes: Routes = [
	{
		path: '',
		component: HotelsComponent,
	},
	{
		path: 'hotels/:id',
		component: SingleHotelComponent,
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
