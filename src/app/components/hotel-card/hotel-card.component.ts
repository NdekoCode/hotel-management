import { Component, Input } from '@angular/core';
import { Hotel } from './../../libs/models/Hotel.model';

@Component({
	selector: 'app-hotel-card',
	templateUrl: './hotel-card.component.html',
})
export class HotelCardComponent {
	@Input() hotel!: Hotel;
}
