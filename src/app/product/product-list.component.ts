import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';

@Component({
  selector: 'my-product',
  templateUrl :   './product-list.component.html',
  styleUrls : ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string = "Product List";
  showImage:boolean = false;
  _listFilter:string;

  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter = value;
    this.filterProducts = this._listFilter ? this.performFilter(this.listFilter):this.products;
  } 

  filterProducts:Iproduct[];
  imageWidth:number = 50;
  imageMargin:number = 2; 
  products:Iproduct[]= [
    {
      "productId" : 1,
      "productName": "car",
      "productCost":52.35,
      "productYear":2020,
      "productCode" : "#1c-b",
       "productTitle" : "first",
       "ProductRating" : 4.3,
       "imageUrl" : "https://images.app.goo.gl/Wv4EXUnFnURFCD9P8" 
    },
    {
      "productId" : 2,
      "productName": "bike",
      "productCost":35.76,
      "productYear":2021,
      "productCode" : "#2c-b",
      "productTitle" : "second",
      "ProductRating" : 4.7,
       "imageUrl" : "https://images.app.goo.gl/U2Mu8nkcG61czrCH7"
    }
  ]

  constructor(){
    this.filterProducts = this.products;
    this.listFilter='car';

  }
  onRightClicked(message:string):void{
    this.pageTitle = 'Product List ' + message;
  }

  performFilter(filterBy:string):Iproduct[]{ 
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
  }

   toggleImage():void{
    this.showImage = !this.showImage;
  }
  ngOnInit():void{
    console.log('Oninit');
  }
} 