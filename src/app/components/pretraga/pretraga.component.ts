import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchFilterAction, SetUsersListAction } from 'src/app/actions/users.actions';
import { AppState } from 'src/app/models/app-state.model';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css']
})
export class PretragaComponent implements OnInit {
  @Output()
  searchEvent = new EventEmitter<string>(); 

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  onInputSearch(event: any) {
    this.searchEvent.emit(event.target.value)
  }
}
