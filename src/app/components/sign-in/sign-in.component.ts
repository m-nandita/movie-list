import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email?: string;
  password?: string;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if(this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe(() => {this.router.navigate(['./movielist'])})
    }
  }

}
