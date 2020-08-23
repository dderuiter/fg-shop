import { Component, OnInit } from '@angular/core';
import { ShopDateService } from '../../services/shop-date.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedDate: string;
  dates: string[] = [];

  constructor(private shopDateService: ShopDateService) { }

  ngOnInit(): void {
    // Add the current day to the list
    let today = new Date();
    this.dates.push(this.getFormattedDate(today));

    // Add the past 6 days to the list
    for (let i = 1; i < 7; i++) {
      let pastDay = new Date();
      pastDay.setDate(today.getDate() - i);
      this.dates.push(this.getFormattedDate(pastDay));
    }

    // Set the selection to the current day
    this.selectedDate = this.dates[0];
    this.shopDateService.updateShopDate(this.selectedDate);
  }

  getFormattedDate(date: Date) {
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

    let formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  changeDate(date: string) {
    this.selectedDate = date;
    this.shopDateService.updateShopDate(this.selectedDate);
  }
}