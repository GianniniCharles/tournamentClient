import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private myHttp: Http) { }

  handleError(e) {
     return Observable.throw(e.json().message);
  }

  getteams(){
    return this.myHttp.get('http://localhost:3000/api/team/allteams')
    .map((res)=> res.json())
  }

  createTeam(theWholeEntryObject){
    return this.myHttp.post('http://localhost:3000/api/team/creation', theWholeEntryObject,{withCredentials: true})
    .map(res=>res.json());
  }


  getJustOneTeam(theIdOfTheTeam){
    return this.myHttp.get(`http://localhost:3000/api/team/details/${theIdOfTheTeam}`)
    .map((res)=> res.json());
  }
  

//remove team
  // deleteATeam(theIdOfTheTeam){
  //   return this.myHttp.post(`http://localhost:3000/api/team/delete/${theIdOfTheTeam}`,{withCredentials:true })
  //   .map((res)=> res.json());
  // }


  updateTeam(theIdOfTheEntry, componentInfo){
    console.log("a team gets edited: ===========>", theIdOfTheEntry)
    return this.myHttp.post(`http://localhost:3000/api/team/${theIdOfTheEntry}`,
    {
      updatedTeamName: componentInfo.updatedTeamName,
      updatedTeamLogo: componentInfo.updatedTeamLogo,
      updatedDescription: componentInfo.updatedDescription
      },
    {withCredentials: true})
    .map((res)=> res.json())
  }

 

   
  // updateTeam(theIdOfTheEntry){
  //   return this.myHttp.post('http://localhost:3000/api/team/'+theIdOfTheEntry,{withCredentials: true})
  //   .map((res)=> res.json())
  // }
  // delete 

}