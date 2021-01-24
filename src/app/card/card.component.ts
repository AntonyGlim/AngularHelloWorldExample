import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() card: Card;
  @Input() index: number;
  title = 'My title';
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda enim est nihil possimus,' +
    'praesentium quaerat quis repellendus saepe ut. Aut dolorum earum eveniet fugit illum magnam omnis possimus, quas.';

  textColor = 'black';

  getInfo(): string {
    return 'This is my info';
  }

  ngOnInit(): void {
  }

  changeTitle(): void {
      this.card.title = 'New title';
  }

  inputHandler(value: string): void {
    this.title = value;
  }

  changeHandler(): void {
    console.log(this.title);
  }
}
