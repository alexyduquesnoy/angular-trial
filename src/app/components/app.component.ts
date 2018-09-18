import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  // second: number;
  // counterSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // const counter = interval(1000);

    // this.counterSubscription = counter.subscribe((value) => {
    //   this.second = value;
    //   console.log(this.second);
    // }, (err) => {
    //   console.log('Oups, an error was occured : ' + err);
    // }, () => {
    //   console.log('Observable complete');
    // });

  }

  ngOnDestroy () {
    // this.counterSubscription.unsubscribe();
  }
}
