import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  @Input() imgName: string;
  @Input() shopDate: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.shopDate);
  }

}
