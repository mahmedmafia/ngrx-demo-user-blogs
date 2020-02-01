import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private stotre: Store<any>, private http: HttpClient) {
  }
  users$: Observable<User[]>
  ngOnInit(): void {
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  deleteUser(id) {
    this.http.delete('https://jsonplaceholder.typicode.com/users/' + id).subscribe(res => {
      console.log(res);
    });
  }
}
export interface Post {

  id?: number;
  userId: string;
  title: string;
  body: string;
}