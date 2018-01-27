import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppStore } from '../../app.store'
import { Dev } from './dev.model'

@Component({
  selector: 'app-dev-signup',
  templateUrl: './dev-signup.component.html',
  styleUrls: ['./dev-signup.component.scss']
})
export class DevSignupComponent implements OnInit {

  dev = new Dev();
  pwShow = false;
  error = {};

  constructor(private appStore: AppStore, private router: Router,) { }

  ngOnInit() {
  }

  onPwopen(){
  	this.pwShow = !this.pwShow;
  }

  saveDev(){
    this.error = {};
    this.validateNewDevEmail();
    this.validateNewDevPassword();
    this.validateNewDevConfirmPassword();
    this.validateNewDev();
    if (this.error == {}){
      this.appStore.freelancers.push(this.dev);
      this.dev = new Dev();
      
      alert("Dev Saved");
      this.router.navigate(['/login']);
    }
  }

  assert(field, value){
    if(!value){this.error[field]="visible";this.error[field + '_ev']="Mandatory Field. ";}
  }

  validateNewDev(){
    this.assert('full_name', this.dev['full_name']);
    this.assert('tel', this.dev['tel']);
    this.assert('skype', this.dev['skype']);
    this.assert('profession', this.dev['profession']);
    this.assert('email', this.dev['email']);
    this.assert('password', this.dev['password']);
    this.assert('confirm_password', this.dev['confirm_password']);
  }

  validateNewDevEmail(){
    if(!this.validateEmail(this.dev['email'])){
      this.error['email_ev'] = "Invalid Email ID";
      this.error['email']="visible";
    }
  }

  validateNewDevPassword(){
    if(!this.validatePassword(this.dev['password'])){
      this.error['password_ev'] = "Password should contain atleat one number and one special charector";
      this.error['password']="visible";
    }
  }

  validateNewDevConfirmPassword(){
    if(this.dev['password'] != this.dev['confirm_password']){
      this.error['confirm_password_ev'] = "Passwords did not match";
      this.error['confirm_password']="visible";
    }
  }

  validateEmail(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
  }

  validatePassword(password) {
      var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i;
      return re.test(password);
  }

}
