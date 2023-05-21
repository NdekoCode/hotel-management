import { Component, Input } from '@angular/core';
import { Hotel } from './../../libs/models/Hotel.model';

@Component({
	selector: 'app-hotel-list',
	templateUrl: './hotel-list.component.html',
})
export class HotelListComponent {
	title: string = 'Liste des hotel';
	@Input() data: Hotel[] = [];
}
