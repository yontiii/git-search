import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Profile } from '../profile'
import { Repository } from '../repository'
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
  profile: Profile;
  repos:Repository;
  public username: string;
  constructor(private http: HttpClient) {
    this.profile = new Profile("",  "", "", "", "", "", "", "", "")
    this.username= "yontiii"
  }
  

  profileRequest() {

    interface profileResponse {
      login: string,

      avatar_url: string,
      followers: string,
      following: string,
      html_url: string,
      location: string,
      name: string,
      email: string,
      public_repos: string,

    }

    let promise = new Promise ((resolve,reject)=>{
      return this.http.get<profileResponse>("https://api.github.com/users/" + this.username + "?access_token=" +environment.apiKey).toPromise().then(response=>{
        this.profile.login=response.login
        this.profile.avatar_url=response.avatar_url
        this.profile.followers=response.followers
        this.profile.following=response.following
        this.profile.html_url=response.html_url
        this.profile.email=response.email
        this.profile.location=response.location
        this.profile.name=response.name
        this.profile.public_repos=response.public_repos
        resolve();

      },
      error=>{
        this.profile.login="unknown user"
        reject("error")
      }
      )
    })
    return promise

  
    
  }
  updateProfile(username:string){
    this.username=username;
  }
 mainUrl:string = "https://api.github.com/";
 findRepos(username: string):Observable<Repository[]>{
return this.http.get<Repository[]>(this.mainUrl + 'users/' + this.username + '/repos?access_token='+ environment.apiKey)
 }

}
