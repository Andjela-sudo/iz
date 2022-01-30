import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SetLoggedInUserAction } from 'src/app/actions/user.actions';
import { AppState } from 'src/app/models/app-state.model';
import { User } from 'src/app/models/user.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-forma-kreiraj-korisnika',
  templateUrl: './forma-kreiraj-korisnika.component.html',
  styleUrls: ['./forma-kreiraj-korisnika.component.css']
})
export class FormaKreirajKorisnikaComponent implements OnInit {
  registerForm: FormGroup
  newUser:any
  constructor( private formBuilder: FormBuilder,private apiService: ApiServiceService,private router: Router) { 
    this.registerForm = this.formBuilder.group({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.newUser = {
      username:this.registerForm.get('username')?.value,
      email:this.registerForm.get('email')?.value,
      password:this.registerForm.get('password')?.value,
    }
    this.apiService.create(this.newUser).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/login'])
    })
  }

}
