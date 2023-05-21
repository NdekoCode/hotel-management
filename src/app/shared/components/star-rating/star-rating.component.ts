import { Component, Input, OnChanges } from '@angular/core';
@Component({
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnChanges {
	@Input() rating: string | number = 2;
	ratingClone!: number;
	public starWidth!: number;
	items!: (number | string)[];
	isFloat!: boolean;
	ngOnChanges(): void {
		this.isFloat = !Number.isInteger(this.rating);
		this.ratingClone = parseInt(this.rating as string);
		this.starWidth = (this.ratingClone * 125) / 5;
		this.items = new Array(this.ratingClone);
	}
}
