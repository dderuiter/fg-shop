import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  @Input() imgName: string;
  dateToday: string;

  constructor() { }

  ngOnInit(): void {
    let date = new Date();

    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

    this.dateToday = `${year}-${month}-${day}`;
    console.log(this.dateToday);
  }

}
