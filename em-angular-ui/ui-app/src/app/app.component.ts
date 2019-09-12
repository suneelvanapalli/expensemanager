import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menulist = [
    {name  : 'Dashboard', url : '/dashboard'},
    { name : 'Heroes', url: '/heroes'},
    { name : 'Hero-details', url: '/hero-details'}
  ];
}
