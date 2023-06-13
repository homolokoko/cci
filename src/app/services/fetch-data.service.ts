import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  Api = "https://angular-material-api.azurewebsites.net/users";

  private dataStore:{users:Users[]}
  private _user: BehaviorSubject<Users[]>;

  constructor(private client:HttpClient) { 
    this.dataStore = {users:[]};
    this._user = new BehaviorSubject<Users[]>([]);
  }

  get user():Observable<Users[]>{
    return this._user.asObservable();
  }

  fetch_all(){
    return this.client.get<Users[]>(this.Api).subscribe(
      (data) => {
        this.dataStore.users = data;
        this._user.next(Object.assign({},this.dataStore).users);
      },
      (error) => {console.log('Fail to fetch Data')}
    );
  }

  // userId(id:number):Users{
  //   return this.dataStore.users.find(x => x.id == id);
  // }


}
