import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLogin = true;
  @Output() openMainModal = new EventEmitter<void>();

  loginForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPhone: new FormControl('', Validators.pattern('[0-9]{11}')),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private api: ApiService) {}

  switchToLogin() {
    this.isLogin = true;
  }

  switchToRegister() {
    this.isLogin = false;
  }

  submit() {
    console.log('submit вызван');
    this.openMainModal.emit(); 
    if (this.isLogin) {
      if (this.loginForm.valid) {
        this.api
          .post('https://jsonplaceholder.typicode.com/login', this.loginForm.value)
          .then((response) => {
            
          })
          .catch(() => {
            
          });
      }
    } else {
      if (this.registerForm.valid) {
        this.api
          .post('https://jsonplaceholder.typicode.com/register', this.registerForm.value)
          .then((response) => {
            
          })
          .catch(() => {
            
          });
      }
    }
  }
}
