import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';


@Component({
	selector: 'pm-product',
    moduleId: module.id,
	templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})


/*
    four types of binding: 
            1. interpolation {{pageTitle}}
            2. property binding: <img [src] ='product.imageUrl'>
            3. evend bining  < button  (click) ='toggleImage()'>
            4. two way binding [()] banana in a box: 
                    <input [(ngModel)] = 'listFitler' />
*/

export class ProductListComponent implements OnInit {
	pageTitle: string = "Product Management";
    imageWidth: number = 50;
    imageNumber: number =2;
    showImage: boolean =false;
    listFilter: string ='cart';
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService){        
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
        //this.products = this._productService.getProducts();
        this._productService.getProducts()
        .subscribe(products => this.products = products,
        error => this.errorMessage = <any>error);
        
    }

    onRatingClicked(message:string): void {
        this.pageTitle="Some clicked on the stat button"+ message;
    }
}
