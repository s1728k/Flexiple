import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppStore } from '../../app.store'
import { Company } from './company.model';

@Component({
  selector: 'app-comp-signup',
  templateUrl: './comp-signup.component.html',
  styleUrls: ['./comp-signup.component.scss']
})
export class CompSignupComponent implements OnInit {

  company = new Company();
  pwShow = false;
  have_referral = true;
  showReferralCode = false;
  showAltReferralCode = false
  r6 = ['','','','','',''];
  error = {};

  constructor(private appStore: AppStore, private router: Router,) { }

  ngOnInit() {
    this.company['referralCode'] = '';
  }

  onPwopen(){
  	this.pwShow = !this.pwShow;
  }

  haveRefferal(){
    this.showReferralCode = true;
    this.showAltReferralCode = false;
  }

  dontHaveRefferal(){
    this.showReferralCode = false;
    this.showAltReferralCode = true;
  }

  referralCodeChange(i){
    for (let i = 0; i < this.r6.length; i++) {
      if(this.r6[i]){
        if(parseInt(this.r6[i]) > 9){
          this.r6[i] = this.r6[i].toString().slice(0,1);
        }
      }
    }
    this.company['referralCode'] = this.r6.join("");
    console.log(this.company['referralCode']);
  }

  saveCompany(){
    this.error = {};
    this.validateNewCompanyEmail();
    this.validateNewCompanyPassword();
    this.validateNewCompanyConfirmPassword();
    this.validateNewCompany();
    if (Object.getOwnPropertyNames(this.error).length === 0){
      this.appStore.companies.push(this.company);
      this.company = new Company();
      
      alert("Company Saved");
      this.router.navigate(['/login']);
    }
  }

  assert(field, value){
    if(!value){this.error[field]="visible";this.error[field + '_ev']="Mandatory Field. ";}
  }

  validateNewCompany(){
    this.assert('table_name', this.company['table_name'])
    this.assert('company_name', this.company['company_name'])
    this.assert('full_name', this.company['full_name'])
    this.assert('tel', this.company['tel'])
    this.assert('skype', this.company['skype'])
    this.assert('email', this.company['email'])
    this.assert('password', this.company['password'])
  }

  validateNewCompanyEmail(){
    if(!this.validateEmail(this.company['email'])){
      this.error['email_ev'] = "Invalid Email ID";
      this.error['email']="visible";
    }
  }

  validateNewCompanyPassword(){
    if(!this.validatePassword(this.company['password'])){
      this.error['password_ev'] = "Password should contain atleat one number and one special charector";
      this.error['password']="visible";
    }
  }

  validateNewCompanyConfirmPassword(){
    if(this.company['password'] != this.company['confirm_password']){
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
