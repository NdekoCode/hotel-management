import { Component, Input } from '@angular/core';
import { IHotel } from '../../../libs/constants/types';

@Component({
	selector: 'app-hotel-card',
	templateUrl: './hotel-card.component.html',
})
export class HotelCardComponent {
	@Input() hotel!: IHotel;
}
