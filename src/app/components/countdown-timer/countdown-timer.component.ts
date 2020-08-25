import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  @Input() dayInterval: number;

  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() { }

  ngOnInit(): void {
    // Define the hour at which updates occur each day
    const updateHr = 5;

    // Define day at which to base 3 days interals off of
    const startDate = new Date("2020-08-19T05:00:00");

    // Update the count down every 1 second
    setInterval(() => {
      let now: Date = new Date();
      let target: Date = new Date(now);

      let timeDifference = now.getTime() - startDate.getTime();
      let daysDifference = timeDifference / (1000 * 3600 * 24);
      let daysTillNextUpdate = Math.floor(this.dayInterval - (daysDifference % this.dayInterval));
      console.log("Days Till: " + daysTillNextUpdate);

      // Set date to next update day
      target.setDate(target.getDate() + daysTillNextUpdate);

      // Set shop update time
      target.setHours(updateHr, 0, 0);

      // Check if shop was already updated for the day
      if (now.getHours() >= target.getHours()) {
        // Check if tomorrow is update day
        if (daysTillNextUpdate === 0) {
          target.setDate(target.getDate() + 1);
        }
      }

      // Get the time difference
      var delta = target.getTime() - now.getTime();

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(delta / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((delta % (1000 * 60)) / 1000);
    }, 1000);
  }

}
