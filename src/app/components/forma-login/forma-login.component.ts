import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SetLoggedInUserAction } from 'src/app/actions/user.actions';
import { SetUsersListAction } from 'src/app/actions/users.actions';
import { AppState } from 'src/app/models/app-state.model';
import { User } from 'src/app/models/user.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-forma-login',
  templateUrl: './forma-login.component.html',
  styleUrls: ['./forma-login.component.css']
})
export class FormaLoginComponent implements OnInit,OnDestroy {
  subscription:any;
  autentification:boolean = false;
  loginForm: FormGroup
  user:any
  constructor( private formBuilder: FormBuilder,private store:Store<AppState>,private router: Router,private apiService:ApiServiceService) { 
    this.loginForm = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl(),
    })
    this.apiService.getAll().subscribe(users => {
      this.store.dispatch(new SetUsersListAction(users))
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.user = {
      username:this.loginForm.get('username')?.value,
      password:this.loginForm.get('password')?.value,
    }

    this.subscription = this.store.select(store=>store.users).subscribe((users:Array<User>)=>{
      
      this.user = users.find(user=>user.username==this.user.username && user.password == this.user.password)
      if(this.user){
        
        this.store.dispatch(new SetLoggedInUserAction(this.user))
        this.router.navigate(['/users'])
      }else{
        alert('Neuspesno logavanje, probajte ponovo')
      }
    })
    
  }

}
