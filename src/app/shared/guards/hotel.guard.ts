import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class HotelGuard implements CanActivate {
	constructor(private _router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		console.log(route, state);
		const id = +route.url[1].path;
		if (isNaN(id) || id <= 0) {
			alert('Url invalid');
			this._router.navigate(['/']);
			return false;
		}
		return true;
	}
}
