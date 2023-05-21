import { Component, EventEmitter, Output } from '@angular/core';
@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
	@Output() searchChange = new EventEmitter<string>();
	searchElement(value: string) {
		this.searchChange.emit(value);
		console.log(value);
	}
}
