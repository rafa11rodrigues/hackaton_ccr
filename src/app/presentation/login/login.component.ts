import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    emailOrPhone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.form.valid) {
      this.router.navigate(['/menu']);
    }
  }
}
