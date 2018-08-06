import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public myhttp: Http) { }

  handleError(e) {
     return Observable.throw(e.json().message);
  }

  createUser(theNewUser) {
    return this.myhttp.post(`http://localhost:3000/api/signup`, theNewUser, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);

  }
  loginUser(theUserToLogIn) {
    return this.myhttp.post(`http://localhost:3000/api/login`, theUserToLogIn, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);

  }

  checkIfLoggedIn() {
    return this.myhttp.get('http://localhost:3000/api/loggedin', {withCredentials: true})
    .map((res)=> {
      return JSON.parse((<any>res)._body);
    })

    .catch(this.handleError);
  }


  // updateTournament
  // deleteTeam(){
  // }
}
