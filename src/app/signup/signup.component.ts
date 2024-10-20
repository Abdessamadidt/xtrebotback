import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
 
  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  getLastDayOfMonth(): Date {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0); // last day of current month
  }

  startCountdown() {
    const lastDayOfMonth = this.getLastDayOfMonth();

    setInterval(() => {
      const now = new Date();
      const timeDiff = lastDayOfMonth.getTime() - now.getTime();

      this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      if (timeDiff <= 0) {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
    }, 1000); // Update every second
  }
}