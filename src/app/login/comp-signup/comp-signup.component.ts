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

  constructor(private appStore: AppStore, private router: Router,) { }

  ngOnInit() {
    this.company['referralCode'] = 0;
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
      if(this.r6[i]>9){
        this.r6[i] = String(this.r6[i]).slice(0,1);
      }
    }
    this.company['referralCode'] = this.r6.join("");
    console.log(this.company['referralCode']);
  }

  saveCompany(){
    this.appStore.companies.push(this.company);
    this.company = new Company();
    
    alert("Company Saved");
    this.router.navigate(['/login']);
  }

}
