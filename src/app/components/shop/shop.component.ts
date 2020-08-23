import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  featuredItemImages: string[] = [
    "featured-item-1.jpg",
    "featured-item-2.jpg",
    "featured-item-3.jpg"
  ];

  regularItemImages: string[] = [
    "regular-item-1.jpg",
    "regular-item-2.jpg",
    "regular-item-3.jpg",
    "regular-item-4.jpg",
    "regular-item-5.jpg",
    "regular-item-6.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
