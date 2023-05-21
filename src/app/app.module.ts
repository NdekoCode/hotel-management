import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent, HotelListComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
