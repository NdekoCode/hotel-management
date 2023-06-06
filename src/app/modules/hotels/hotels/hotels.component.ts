import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiConfigService } from 'src/app/shared/services/api-config.service';
import { HotelListService } from 'src/app/shared/services/hotel-list.service';
import { IHotel } from '../../../libs/constants/types';
import { Hotel } from './../../../shared/models/Hotel.model';

@Component({
	selector: 'app-hotels',
	templateUrl: './hotels.component.html',
})
export class HotelsComponent implements OnInit, OnDestroy {
	searchValue: string = '';
	public hotelData!: Hotel[];
	public filteredHotelData!: Hotel[];
	subscription!: Subscription;
	constructor(
		private _hotelService: HotelListService,
		private _apiConfig: ApiConfigService
	) {}
	ngOnInit(): void {
		this.getHotelData();
	}
	search(value: Event | string): void {
		this.searchValue = value as string;
		this.getHotelData();
	}

	private getHotelData() {
		this.subscription = this._hotelService.fetchHotelList().subscribe({
			next: (data) => {
				this.hotelData = data;
				this.filteredHotelData = this.filterHotelData(this.searchValue);
			},
			error: this._apiConfig.handleError,
		});
	}
	private filterHotelData(value: string): IHotel[] {
		return value
			? this.hotelData.filter((item) =>
					item.hotelName.toLowerCase().includes(value.toLowerCase())
			  )
			: this.hotelData;
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
