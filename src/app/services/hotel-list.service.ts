import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HOTEL_DATA } from './../libs/constants/data';
import { IHotel } from './../libs/constants/types';
import { ApiConfigService } from './api-config.service';
@Injectable({
	providedIn: 'root',
})
export class HotelListService {
	public dataHotel: IHotel[] = HOTEL_DATA;
	constructor(private _http: HttpClient, private apiConfig: ApiConfigService) {}
	fetchHotelList(): Observable<IHotel[]> {
		return this._http.get<IHotel[]>(this.apiConfig.BASE_URL + '/hotels').pipe(
			tap((data) => {
				console.log(data);
			}),
			catchError(this.apiConfig.handleError)
		);
	}
	getSingleHotel(hotelId: number) {
		return this._http
			.get<IHotel>(`${this.apiConfig.BASE_URL}/hotels/${hotelId}`)
			.pipe(
				tap((data) => {
					console.log(data);
				}),
				catchError(this.apiConfig.handleError)
			);
	}
}
