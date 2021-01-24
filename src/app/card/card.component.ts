import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  title = 'My title';
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda enim est nihil possimus,' +
    'praesentium quaerat quis repellendus saepe ut. Aut dolorum earum eveniet fugit illum magnam omnis possimus, quas.';

  number = 1;
  obj = {name: 'Victor', birthday: {year: 1990, month: 12, day: 21}};
  imgUrl = 'https://blog.ninja-squad.com/assets/images/angular.png';
  disabled = false;
  textColor = 'black';

  getInfo(): string {
    return 'This is my info';
  }

  ngOnInit(): void {
  }

  changeTitle(): void {
      this.title = 'New title';
  }

  inputHandler(value: string): void {
    this.title = value;
  }

  changeHandler(): void {
    console.log(this.title);
  }
}
