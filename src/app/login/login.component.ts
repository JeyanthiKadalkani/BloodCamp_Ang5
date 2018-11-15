import { Component, OnInit } from '@angular/core';
import { ComponentInteractionService } from '../component-interaction.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formConfig = [
    { label: 'UserName', type: 'text', name: 'userName', constraint: Validators.required },
    { label: 'Password', type: 'password', name: 'password', constraint: Validators.required }

  ]
  errorMsg: string;
  constructor(private service: ComponentInteractionService, private builder: FormBuilder,
    private route: Router) { }

  ngOnInit() {
    this.loginForm = this.builder.group({});
    this.formConfig.forEach(eachControl => {
      this.loginForm.addControl(eachControl.name,
        new FormControl('', [eachControl.constraint]))
    });
  }

  signIn() {
    console.log('signIn - logged');
    const uname = this.loginForm.controls.userName.value;
    const pwd = this.loginForm.controls.password.value;
    if (uname == 'admin' && pwd == 'admin') {
      this.service.changeUserStatus('logged');
      sessionStorage.setItem('logged', 'yes');
      this.route.navigate(['home']);
    }
    else {
      this.errorMsg = 'Invalid username and password';
    }

  }

  submit() {
    console.log('')
  }

}
