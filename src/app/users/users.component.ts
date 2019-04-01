import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { HttpClient } from '@angular/common/http';
import { ProfileRequestService } from '../profile-http/profile-request.service'
import { Repository } from '../repository';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [ProfileRequestService],
  styleUrls: ['./users.component.css'],

})
export class UsersComponent implements OnInit {

  profile: Profile;
  username: string;
   Repository:Repository[];

   loading:boolean=false;
   errormessage;

  locateUserProfile(){
    this.profileRequestService.updateProfile(this.username);
    this.profileRequestService.profileRequest();
    this.profile=this.profileRequestService.profile
  }
  

  constructor(private http: HttpClient, private profileRequestService: ProfileRequestService) { }

  public findRepos(){
    this.loading=true;
    this.errormessage='';

    this.profileRequestService.findRepos(this.username).subscribe((response)=>{this.Repository=response;},
    (error)=>{this.errormessage=error;this.loading=false;},()=>{this.loading=false;})

  }
  ngOnInit() {
    this.profileRequestService.profileRequest();
    this.profile=this.profileRequestService.profile
  }

}
