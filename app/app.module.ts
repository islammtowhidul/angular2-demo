import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ProductListComponent}  from  './product/product-list.component';
import {ProductDetailComponent} from './product/product-detail.component';
import {ProductDetailGuard} from './product/product-guard.service';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
    
import {ProductService} from './product/product.service';
import {ProductFilterPipe} from './product/product-filter.pipe';
import {StarComponent} from './shared/star.component';

import { AppComponent }  from './app.component';



@NgModule({
  imports: [ BrowserModule, 
  					 FormsModule,
  					 HttpModule,
             RouterModule.forRoot([
                { path: 'products', component: ProductListComponent},
                { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent}, 
                { path: 'welcome', component: WelcomeComponent},
                {path: 'product/:id', component: ProductDetailComponent},
                { path: '', redirectTo: 'welcome', pathMatch: 'full'},
                { path: '**', redirectTo: 'welcome', pathMatch: 'full'}

               ]) ],
  declarations: [ AppComponent,
                  WelcomeComponent,
  								ProductListComponent,
                  ProductDetailComponent,
  								StarComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    ProductService, ProductDetailGuard
    
  ]
})
export class AppModule { }
