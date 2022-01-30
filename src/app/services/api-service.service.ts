import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  //getAll, getOneByID, create, update, delete
  private readonly BASE_URL = 'http://it255.glitch.me/users';

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get(this.BASE_URL)
    .pipe(
      map((data: any) => data.map((item: any) =>
      <User>{ id: item.id , username: item.username , email: item.email, password : item.password, role:item.role})),
      );
  }
  public getOneByID(id: string){
    return this.http.get(this.BASE_URL+'/'+id)
    .pipe(
      map((data:any)=><User>data)
      );
  }
  public create(newUser:User){
    return this.http.post(this.BASE_URL,newUser)
  }
  public update(changedUser:User){
    console.log(changedUser);
    
    return this.http.patch(this.BASE_URL+'/'+changedUser.id,changedUser)
  }
  public delete(user:User){
    return this.http.delete(this.BASE_URL+'/'+user.id)
  }
}
