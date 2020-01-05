import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MinneApp';
  links = [
    {label: 'Home', path: 'home'},
    {label: 'Apps', path: 'apps'},
    {label: 'About', path: 'about'}
  ];
}
