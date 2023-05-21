import { Component, Input, OnChanges } from '@angular/core';
@Component({
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnChanges {
	@Input() rating: string | number = 2;
	public starWidth!: number;
	items!: (number | string)[];
	ngOnChanges(): void {
		this.rating = parseInt(this.rating as string);
		this.starWidth = (this.rating * 125) / 5;
		this.items = new Array(this.rating);
	}
}
