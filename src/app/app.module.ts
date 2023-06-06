import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsModule } from './modules/hotels/hotels.module';
import { SharedModule } from './modules/shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
	declarations: [AppComponent, NotFoundComponent, NavbarComponent],
	imports: [
		BrowserModule,
		SharedModule,
		HttpClientModule,
		HotelsModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
