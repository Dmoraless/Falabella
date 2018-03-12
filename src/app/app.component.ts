import { Component } from '@angular/core'



@Component({
  selector: 'my-app',
  template: `
  <cabeza></cabeza>
  <a routerLink="/welcome">Welcome</a> | <a routerLink="/history">History</a>
  <router-outlet></router-outlet>
  <pie></pie>
`
})
export class AppComponent  { }
