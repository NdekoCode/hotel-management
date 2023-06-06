import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './modules/hotels/hotels.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
	{
		path: 'home',
		component: HotelsComponent,
	},

	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
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
