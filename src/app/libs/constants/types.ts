export interface IHotel {
	id: number;
	hotelName: string;
	description: string;
	price: number;
	imageUrl: string;
	rating: number;
}
export type Company = {
	address: {
		address: string;
		city: string;
	};
	department: string;
	name: string;
	title: string;
};
