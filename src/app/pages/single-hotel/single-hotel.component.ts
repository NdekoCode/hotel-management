import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IHotel } from './../../libs/constants/types';
import { ApiConfigService } from './../../services/api-config.service';
import { HotelListService } from './../../services/hotel-list.service';

@Component({
	selector: 'app-single-hotel',
	templateUrl: './single-hotel.component.html',
	styleUrls: ['./single-hotel.component.scss'],
})
export class SingleHotelComponent implements OnInit, OnDestroy {
	public hotel!: IHotel;
	private subscription!: Subscription;
	isLoading: boolean = true;
	constructor(
		private _hotelService: HotelListService,
		private _apiConfig: ApiConfigService,
		private _router: ActivatedRoute
	) {}
	ngOnInit(): void {
		this.getHotel();
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
	getHotel(): void {
		const id = +this._router.snapshot.params['id'];
		this.subscription = this._hotelService.getSingleHotel(id).subscribe({
			next: (data) => {
				this.hotel = data;
				this.isLoading = false;
			},
			error: (err) => {
				this._apiConfig.handleError(err);
				this.isLoading = false;
			},
		});
	}
}
