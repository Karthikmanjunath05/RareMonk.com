import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  login(uname: string, pword: string) {
    if (uname === 'karthik' && pword === '1234'){
      return 200;
    } else if(uname === 'chhaya' && pword === '1234') {
      return 200;
    } else {
      return 403;
    }
  }
}
