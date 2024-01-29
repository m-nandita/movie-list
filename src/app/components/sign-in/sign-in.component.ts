import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email?: string;
  password?: string;

  constructor(private router: Router) {}

  login() {
    if(this.email && this.password) {
      // TODO: Implement authentication logic here
      this.router.navigate(['./movielist'])
    }
  }
}
