import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService : AuthService, private router: Router) {
  }
  canActivate(): boolean {
    if(this.authService.loggedIn()){
      return true;
    }
    console.log('You arent logged in');
    this.router.navigate(['/register']);
    return false;
  }
  
}
