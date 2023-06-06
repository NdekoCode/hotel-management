import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IHotel } from '../../libs/constants/types';
import { HOTEL_DATA } from './../../libs/constants/data';
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
	getSingleHotel(id: number): Observable<IHotel> {
		console.log(this.apiConfig.BASE_URL);
		return this._http
			.get<IHotel>(`${this.apiConfig.BASE_URL}/hotels/${id}`)
			.pipe(
				tap((data) => {
					console.log(data);
				}),
				catchError(this.apiConfig.handleError)
			);
	}
}
