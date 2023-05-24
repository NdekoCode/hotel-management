import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { HotelCardComponent } from './shared/components/hotel-card/hotel-card.component';
import { HotelListComponent } from './shared/components/hotel-list/hotel-list.component';
import { SearchInputComponent } from './shared/components/search-input/search-input.component';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { ReplaceCommaPipe } from './shared/pipes/replace-comma.pipe';
registerLocaleData(localeFr, 'fr');
@NgModule({
	declarations: [
		AppComponent,
		HotelListComponent,
		SearchInputComponent,
		HotelsComponent,
		HotelCardComponent,
		ReplaceCommaPipe,
		StarRatingComponent,
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
