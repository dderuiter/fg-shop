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

      let daysTillNextUpdate: number = 0;

      // Check if updater interval is every 3 days
      if (this.dayInterval === 3) {
        let timeDifference = now.getTime() - startDate.getTime();

        // Get days since start date
        let daysDifference = timeDifference / (1000 * 3600 * 24);

        // Get number of days until update
        daysTillNextUpdate = Math.ceil(daysDifference % this.dayInterval);

        // Set date to when the next 3 day update interval is
        target.setDate(target.getDate() + daysTillNextUpdate);
      }

      // Check if shop was already updated for the day
      if (now.getHours() >= updateHr) {
        // Check if updater interval is every day
        if (this.dayInterval === 1) {
          target.setDate(target.getDate() + this.dayInterval);
        }
        // Check if update interval is every 3 days and update interval already passed today
        else if (this.dayInterval === 3 && daysTillNextUpdate === 0) {
          target.setDate(target.getDate() + this.dayInterval);
        }
      }

      // Set shop update time
      target.setHours(updateHr, 0, 0);

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
