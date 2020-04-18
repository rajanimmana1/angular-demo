import{ Component, OnChanges } from '@angular/core'

@Component({
 selector :'star-root',
 templateUrl:'./star.component.html',
 styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
  startWidth:number;
  rating:number = 4;

  ngOnChanges():void{
    this.startWidth = this.rating * 75 /5;
  }
}