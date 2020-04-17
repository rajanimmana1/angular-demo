import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template : `
  <div>
  <h1 class="text-center" >{{pageTitle}}</h1>
  <my-product></my-product>
  </div>
  `
})
export class AppComponent  {
  pageTitle = 'New product management- my new project';
}
