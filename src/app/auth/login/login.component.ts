import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainigCenterService } from '../../trainig-center.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  loginForm !: FormGroup;

  //constructor
  constructor(private service: TrainigCenterService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


  // login function
  login() {

    // using service object of TrainigCenterService
    this.service.login(this.loginForm.value).subscribe((response) => {

      if (response.token) {
        const jwtToken = response.token
        const role = response.role ; 
        localStorage.setItem('ROLE', role);
        localStorage.setItem('JWT', jwtToken);
        this.router.navigateByUrl('/dashboard');      }
    });
  }
}
