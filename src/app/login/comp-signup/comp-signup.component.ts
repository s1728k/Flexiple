import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../shared/rest-api.service';
import { AppStore } from '../../app.store'
import { Company } from './company.model';
import { environment } from '../../../environments/environment';

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
  e = {};

  constructor(private http: RestApiService, private appStore: AppStore, private router: Router,) { }

  ngOnInit() {
    this.company['referralCode'] = '';
  }

  onPwopen(){
  	this.pwShow = !this.pwShow;
  }

  haveRefferal(){
    this.company['have_referral'] = true;
    this.showReferralCode = true;
    this.showAltReferralCode = false;
  }

  dontHaveRefferal(){
    this.company['have_referral'] = false;
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
    this.company['referral_code'] = this.r6.join("");
    console.log(this.company['referral_code']);
  }

  saveCompany(){
      this.http.url = environment.baseUrl + '1';
      this.company['table'] = 'company';
      this.company['secret'] = "$2y$10$IKTMx1reCFHIgOTzqQoPeukNferN5Z10bFol.itjyclfX7BAxtf4m";
      this.http.addObj(this.company).subscribe((res)=>{
        console.log(res);
        if(res['status']=='success'){
          if(res['data']['errors']){
            this.e = res['data']['errors'];
          }
        }else{
          console.log(res);
        }
      });
  }

}
