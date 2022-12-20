import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  bg_image: string = '/assets/bg.png';

  ngOnInit(): void {}

  @Input() menu: any = [];

  // menu = [
  //   {
  //     name: 'Pizza',
  //     ingredients: ['pepperoni', 'mushrom', 'mozarella'],
  //     id: 0,
  //     price: 14,
  //     emoji: '/assets/pizza.png',
  //   },
  //   {
  //     name: 'Hamburger',
  //     ingredients: ['beef', 'cheese', 'lettuce'],
  //     price: 12,
  //     emoji: '/assets/burger.png',
  //     id: 1,
  //   },
  //   {
  //     name: 'Beer',
  //     ingredients: ['grain, hops, yeast, water'],
  //     price: 12,
  //     emoji: '/assets/beer.png',
  //     id: 2,
  //   },
  // ];

  orderedItem: any = [];

  total: number = 0;

  addItem(item: any) {
    //this.orderedItem.push(item);
    let productName = this.orderedItem.find(
      (items: any) => items.name === item.name
    );

    if (productName === undefined) {
      this.orderedItem.push(item);
      console.log('fresh', this.orderedItem);
    } else {
      this.orderedItem = this.orderedItem.map((items: any) =>
        items.name === item.name
          ? { ...items, price: items.price + item.price }
          : items
      );

      console.log('updated', this.orderedItem);
    }

    this.total = this.orderedItem.reduce(
      (pre: any, cur: any) => pre + cur.price,
      0
    );
  }

  removeItem(id: number) {
    this.orderedItem = this.orderedItem.filter((item: any) => item.id !== id);
    this.total = this.orderedItem.reduce(
      (pre: any, cur: any) => pre + cur.price,
      0
    );
  }

  searchitem: string = '';

  searchItems(e: any) {
    this.searchitem = e.target.value;
  }

  completedOrder() {
    this.orderedItem = [];
  }
}
