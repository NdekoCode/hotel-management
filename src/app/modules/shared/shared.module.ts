import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchInputComponent } from './../../shared/components/search-input/search-input.component';
import { ReplaceCommaPipe } from './../../shared/pipes/replace-comma.pipe';

@NgModule({
	declarations: [SearchInputComponent, ReplaceCommaPipe],
	imports: [],
	exports: [CommonModule, FormsModule, SearchInputComponent, ReplaceCommaPipe],
})
export class SharedModule {}
