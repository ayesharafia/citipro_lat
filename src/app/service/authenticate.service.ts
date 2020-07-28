import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  logOut() {
    sessionStorage.removeItem('username');
  }

  constructor() { }

authenticate(username, password,isUser) {
  if (isUser==1) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    return true;
    
  }
  else{
    return false;
  }
  }
 




isUserLoggedIn() {
  let username = sessionStorage.getItem('username')
  return !(username === null)


}
}