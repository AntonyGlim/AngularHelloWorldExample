import {Component} from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true;
  cards: Card[] = [
    {title: 'Card one', text: 'Card number 1'},
    {title: 'Card two', text: 'Card number 2'},
    {title: 'Card three', text: 'Card number 3'}
  ];

  toggleCards(): void {
    this.toggle = !this.toggle;
  }
}
