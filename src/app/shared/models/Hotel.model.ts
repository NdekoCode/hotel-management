import { Company } from './../../libs/constants/types';
export class Hotel {
	id!: number;
	hotelName!: string;
	description!: string;
	price!: number;
	imageUrl!: string;
	rating!: number;
}

export class User {
	id!: number | string;
	firstName!: string;
	lastName!: string;
	maidenName?: string;
	age?: number;
	gender?: string;
	email!: string;
	phone?: string;
	username?: string;
	password?: string;
	birthDate?: string;
	image!: string;
	company!: Company;
	[key: string]: string | number | undefined | null | object;
}
