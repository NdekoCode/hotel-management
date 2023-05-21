import { Component, Input } from '@angular/core';
import { IHotel } from './../../libs/constants/types';

@Component({
	selector: 'app-hotel-list',
	templateUrl: './hotel-list.component.html',
})
export class HotelListComponent {
	title: string = 'Liste des hotel';
	@Input() data: IHotel[] = [];
}
