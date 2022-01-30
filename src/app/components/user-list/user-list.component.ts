import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SetUsersListAction } from 'src/app/actions/users.actions';
import { AppState } from 'src/app/models/app-state.model';
import { User } from 'src/app/models/user.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$ : Observable<Array<User>>
  @Input()
  searchText:string
  constructor(private store: Store<AppState>,private apiService : ApiServiceService){
    this.apiService.getAll().subscribe(users => {
      this.store.dispatch(new SetUsersListAction(users))
    })
  }

  ngOnInit(): void {
    this.users$ = this.store.select(store=>store.users)
  }

}
