import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersComponent } from './pages/users/users.component';
import { PretragaComponent } from './components/pretraga/pretraga.component';
import { NavigacijaComponent } from './components/navigacija/navigacija.component';
import { FormaKreirajKorisnikaComponent } from './components/forma-kreiraj-korisnika/forma-kreiraj-korisnika.component';
import { FormaLoginComponent } from './components/forma-login/forma-login.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './models/app-state.model';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { SearchFilterPipe } from './helpers/search-filter.pipe';
import { AuthGuardService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UsersComponent,
    PretragaComponent,
    NavigacijaComponent,
    FormaKreirajKorisnikaComponent,
    FormaLoginComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailsComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
