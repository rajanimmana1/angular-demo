import { Injectable } from "@angular/core";
import { Iproduct } from "./product";

@Injectable({
  providedIn :'root'
})
export class ProductService{

  getProducts():Iproduct[]{
    return[
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
  }

}