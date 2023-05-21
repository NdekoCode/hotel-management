import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HotelsComponent } from './pages/hotels/hotels.component';

@NgModule({
	declarations: [
		AppComponent,
		HotelListComponent,
		SearchInputComponent,
		HotelsComponent,
		HotelCardComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
