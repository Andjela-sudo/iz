import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/app-state.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  loggedUser$: Observable<User>
  searchText : string
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.loggedUser$ = this.store.select(store=>store.loggedInUser)
  }
  updateUsersList(text:string){
    this.searchText = text
  }

}
