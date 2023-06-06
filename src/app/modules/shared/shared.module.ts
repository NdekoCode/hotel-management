import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../../app-routing.module';
import { SearchInputComponent } from './../../shared/components/search-input/search-input.component';

@NgModule({
	declarations: [SearchInputComponent],
	imports: [CommonModule, AppRoutingModule],
	exports: [SearchInputComponent, AppRoutingModule],
})
export class SharedModule {}
