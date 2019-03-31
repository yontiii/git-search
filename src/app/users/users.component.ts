import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    profile:Profile;
    username:string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
      interface profileResponse{
         login:string,
         name:string,
         avatar_url:string,
        followers:string,
        following:string,
        html_url:string,
        company:string,
        location:string,
        bio:string,
        public_repos:string,
      }

    this.username="yontiii";
    this.http.get<profileResponse>("https://api.github.com/users/" +this.username +"?access_token=45da1acab3858d966747dcff67db37fbfcd81bae ").subscribe(data=>{
      this.profile= new Profile(data.login,data.login,data.avatar_url,
        data.followers,data.following,data.html_url,data.company,data.location,data.bio,data.public_repos)
    })
      
  }

}
