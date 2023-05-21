import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: 'replaceComma',
})
export class ReplaceCommaPipe implements PipeTransform {
	transform(value: null | string): string {
		if (!!value) {
			return value.replace(/,/, '.');
		}
		return '';
	}
}
