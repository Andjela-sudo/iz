import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SetLoggedInUserAction } from 'src/app/actions/user.actions';
import { AppState } from 'src/app/models/app-state.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.css']
})
export class NavigacijaComponent implements OnInit {

  loggedUser$: Observable<User>
  
  constructor(private store:Store<AppState>,private router: Router) {
   }

  ngOnInit(): void {
    this.loggedUser$ = this.store.select(store=>store.loggedInUser)
  }



}
