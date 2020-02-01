import { Component, OnInit } from '@angular/core';
import * as counterReducer from './store/counter.reducer';
import { CounterActions } from './store/counter.action';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'ngrx-proj-demo';
  count$: Observable<number>;
 
  constructor(private stotre: Store<counterReducer.CounterState>, private http: HttpClient) {
    this.count$ = this.stotre.select(counterReducer.getCounter);
  }
  addCount() {
  }
  increaseCounter() {
    this.stotre.dispatch(new CounterActions.IncrementCounter);

  }
  decreaseCounter() {
    this.stotre.dispatch(new CounterActions.DecrementCounter);
  }
  resetCounter() {
    this.stotre.dispatch(new CounterActions.ResetCounter);

  }
  deleteUser() {

  }
}
