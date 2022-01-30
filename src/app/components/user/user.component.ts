import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SetUsersListAction } from 'src/app/actions/users.actions';
import { AppState } from 'src/app/models/app-state.model';
import { User } from 'src/app/models/user.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loggedUser$: Observable<User>
  @Input()
  user:User
  updateForm: FormGroup
  constructor(private formBuilder: FormBuilder,private store:Store<AppState>,private apiService: ApiServiceService) {
    this.loggedUser$ = this.store.select(store=>store.loggedInUser)
    
    this.updateForm = this.formBuilder.group({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      role: new FormControl(),
    })
   }

  ngOnInit(): void {
  }
  onDeleteUser(){
    this.apiService.delete(this.user).subscribe((data:any) => {
      this.apiService.getAll().subscribe(users => {
        this.store.dispatch(new SetUsersListAction(users))
      })
    })
  }
  onUpdateUser(){
    
    this.apiService.update({id:this.user.id ,username:this.updateForm.get('username')?.value ,email:this.updateForm.get('email')?.value,password:this.updateForm.get('password')?.value,role:this.updateForm.get('role')?.value}).subscribe((data:any) => {
      console.log(data);
      
      this.apiService.getAll().subscribe(users => {
        this.store.dispatch(new SetUsersListAction(users))
      })
    })
  }

}
