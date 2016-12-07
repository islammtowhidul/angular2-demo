import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
	templateUrl: 'app/product/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
	pageTitle: string="Product detail";
	product: IProduct;

	constructor(private _route: ActivatedRoute,
					private _router: Router){
		/* two optiosn to do this
		* 1. Snapshot  (to get the initial value, that's enough)
		* 2. Observable (use when parameter will be changed without levaing this page)
		*/
			console.log(this._route.snapshot.params['id']);
	}


	ngOnInit(): void{
			let id =   +this._route.snapshot.params['id'];
			this.pageTitle += `:${id}`;
	}

	onBack():void {
		this._router.navigate(['/products']);
	}



}