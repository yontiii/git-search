import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Profile } from '../profile'
import { Repository } from '../repository'
@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
  profile: Profile;
  constructor(private http: HttpClient) {
    // this.profile = new Profile("",  "", "", "", "", "", "", "", "")
  }
  public username: string;

  profileRequest() {


    
  }
}
