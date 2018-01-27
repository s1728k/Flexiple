import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppStore } from '../../app.store'
import { AuthGuard } from '../../shared/auth-guard.service'

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  email = "";
  password = "";
  rem = false;
  error = {};

  constructor(private appStore: AppStore, private router: Router, private authGuard: AuthGuard,) { }

  ngOnInit() {
  }

  login(){
    console.log(this.appStore.freelancers);
    console.log(this.appStore.companies);
  	if(this.appStore.freelancers.find
      (x => x.email === this.email)){
  		let dev = this.appStore.freelancers.find(x => x.email === this.email);
  		if(dev['password'] === this.password){
        this.authGuard.isLoggedIn = true;
	  		this.router.navigate(['/dashboard']);
	  	}else{
	  		this.error['login_failed'] = "invalid credencials";
	  	}
  	}else if(this.appStore.companies.find(x => x.email === this.email)){
  		let dev = this.appStore.companies.find(x => x.email === this.email);
      console.log(dev);
  		if(dev['password'] === this.password){
        this.authGuard.isLoggedIn = true;
	  		this.router.navigate(['/dashboard']);
	  	}else{
	  		this.error['login_failed'] = "invalid credencials";
	  	}
  	}else{
      this.error['login_failed'] = "invalid credencials";
    }
  }

}
