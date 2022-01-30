import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.model';
import { User } from 'src/app/models/user.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: string
  user:User
  loader = true;

  constructor(private route: ActivatedRoute, private store: Store<AppState>,private apiService : ApiServiceService) { 
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id')+'';
      this.apiService.getOneByID(this.userId).subscribe(user => {
        this.user = user;
        this.loader = false;
      });
    })
  }

  ngOnInit(): void {
  }

}
