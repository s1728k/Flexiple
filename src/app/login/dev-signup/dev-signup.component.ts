import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../shared/rest-api.service';
import { AppStore } from '../../app.store'
import { Dev } from './dev.model'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dev-signup',
  templateUrl: './dev-signup.component.html',
  styleUrls: ['./dev-signup.component.scss']
})
export class DevSignupComponent implements OnInit {

  dev = new Dev();
  pwShow = false;
  error = {};

  constructor(private http: RestApiService, private appStore: AppStore, private router: Router,) { }

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
    if (Object.getOwnPropertyNames(this.error).length === 0){
      this.http.url = environment.baseUrl + '1';
      this.dev['table'] = this.dev['profession'];
      this.dev['secret'] = "$2y$10$IKTMx1reCFHIgOTzqQoPeukNferN5Z10bFol.itjyclfX7BAxtf4m";
      this.http.addObj(this.dev).subscribe((data:any)=>{
        console.log(data);
      });
      // this.router.navigate(['/login']);
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
    this.assert('password_confirmation', this.dev['password_confirmation']);
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
    if(this.dev['password'] != this.dev['password_confirmation']){
      this.error['password_confirmation_ev'] = "Passwords did not match";
      this.error['password_confirmation']="visible";
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
