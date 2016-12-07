import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate{

			constructor(private _router: Router){

			}
			canActivate(route: ActivatedRouteSnapshot):boolean{
					console.log('in canActivate method');
					let id=  +route.url[1].path;
					if( isNaN(id) || id <1 ){

							alert('invalid product id');
							this._router.navigate(['/products']);
							return false;
					}

					return true;
			}
}