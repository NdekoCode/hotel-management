import { Injectable } from '@angular/core';
import { HOTEL_DATA } from './../libs/constants/data';
import { IHotel } from './../libs/constants/types';
@Injectable({
	providedIn: 'root',
})
export class HotelListService {
	public dataHotel: IHotel[] = HOTEL_DATA;
}
