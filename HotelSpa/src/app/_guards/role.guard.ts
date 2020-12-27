import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {

    constructor(private authService : AuthService, private router: Router) {
    }
    canActivate(): boolean {
      if(this.authService.decodedToken.role === 'main' || this.authService.decodedToken.role === 'admin'){
        return true;
      }
      console.log('You arent admin or main');
      this.router.navigate(['/register']);
      return false; 
    }
}
