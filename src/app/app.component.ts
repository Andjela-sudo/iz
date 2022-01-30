import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetUsersListAction } from './actions/users.actions';
import { AppState } from './models/app-state.model';
import { ApiServiceService } from './services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ispiti-zadatak';


}
