import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menulist = [
    {name  : 'Expense Dashboard', url = '/dashboard'}, 
    { name : 'Create Expense'}];
}
