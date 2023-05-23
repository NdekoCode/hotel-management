import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/libs/models/Hotel.model';
import { IHotel } from './../../libs/constants/types';
import { HotelListService } from './../../services/hotel-list.service';

@Component({
	selector: 'app-hotels',
	templateUrl: './hotels.component.html',
})
export class HotelsComponent implements OnInit {
	searchValue: string = '';
	public hotelData!: Hotel[];
	public filteredHotelData!: Hotel[];
	constructor(private _hotelService: HotelListService) {}
	ngOnInit(): void {
		this.hotelData = this._hotelService.dataHotel;
		this.getHotelData();
	}
	search(value: string): void {
		this.searchValue = value;
		this.getHotelData();
	}
	private getHotelData() {
		this.filteredHotelData = this.filterHotelData(this.searchValue);
	}
	private filterHotelData(value: string): IHotel[] {
		return value
			? this.hotelData.filter((item) =>
					item.hotelName.toLowerCase().includes(value.toLowerCase())
			  )
			: this.hotelData;
	}
}
