import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.css']
})
export class LoginReactiveFormComponent implements OnInit {
  // currentUser: {
  //   igLogin: boolean,
  //   username: string,
  //   password: string
  // } = { isLogin: false, username: '', password: '' }
  constructor() { }

  loginData = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('')
  })

  get Username() {
    return this.loginData.get('username')
  }
  isSubmited = false;
  get Password() {
    return this.loginData.get('password')
  }
  validateForm() {
    if (this.Username?.errors) {
      console.log(this.Username.errors)
    }
  }

  handleLoginForm() {
    this.isSubmited = true
    this.validateForm()
    // console.log(this.loginData.get('username'))
    // console.log(this.loginData.get('password'))
  }



  handleIsSubmitedState() {
    if (this.isSubmited == true) {
      this.isSubmited = false
    }
  }

  ngOnInit(): void {
  }

}
