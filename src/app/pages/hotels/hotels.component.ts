import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/libs/models/Hotel.model';
import { HOTEL_DATA } from './../../libs/constants/data';

@Component({
	selector: 'app-hotels',
	templateUrl: './hotels.component.html',
})
export class HotelsComponent implements OnInit {
	searchValue: string = '';
	public hotelData: Hotel[] = HOTEL_DATA;
	public filteredHotelData!: Hotel[];

	ngOnInit(): void {
		this.getHotelData();
	}
	search(value: string): void {
		this.searchValue = value;
		console.log(this.searchValue);
		this.getHotelData();
	}
	getHotelData() {
		if (!this.searchValue) {
			this.filteredHotelData = this.hotelData;
		} else {
			this.filteredHotelData = this.hotelData.filter((item) =>
				item.hotelName.includes(this.searchValue)
			);
		}
	}
}
