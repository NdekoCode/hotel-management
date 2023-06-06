import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
		HttpClientModule,
		FormsModule,
		SharedModule,
		HotelsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
