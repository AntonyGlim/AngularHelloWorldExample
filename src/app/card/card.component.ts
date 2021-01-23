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

  getInfo(): string {
    return 'This is my info';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.disabled = true;
      this.imgUrl = 'https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg';
    }, 3000);
  }
}
