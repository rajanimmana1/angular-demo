import{ Component, OnChanges,Input, EventEmitter,Output } from '@angular/core'

@Component({
 selector :'star-root',
 templateUrl:'./star.component.html',
 styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
  startWidth:number;
  @Input() rating:number;
  @Output() rightClick:EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges():void{
    this.startWidth = this.rating * 75 /5;
  }
  OnClick():void{
    this.rightClick.emit(`the rating ${this.rating} was clicked`);
  } 

}