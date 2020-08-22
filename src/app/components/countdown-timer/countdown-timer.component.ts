import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() { }

  ngOnInit(): void {
    // Update the count down every 1 second
    setInterval(() => {
      let now: Date = new Date();
      let target: Date = new Date(now);

      // Define the hour at which updates occur each day
      const updateHr = 5;

      // Check if shop was already updated for the day
      if (now.getHours() >= updateHr) {
        // Set date to tomorrow
        target.setDate(target.getDate() + 1);
      }

      // Set shop update time
      target.setHours(updateHr, 0, 0);

      var delta = target.getTime() - now.getTime();

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(delta / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((delta % (1000 * 60)) / 1000);
    }, 1000);
  }

}
