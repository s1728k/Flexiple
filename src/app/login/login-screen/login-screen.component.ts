import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../shared/rest-api.service';
import { AppStore } from '../../app.store'
import { AuthGuard } from '../../shared/auth-guard.service'
import { environment } from '../../../environments/environment';

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
  dev ={};
  login_as = "";

  constructor(private http: RestApiService, private appStore: AppStore, private router: Router, private authGuard: AuthGuard,) { }

  ngOnInit() {
  }

  login(){
      this.http.url = environment.baseUrl + '3';
      this.dev['table'] = this.login_as;
      this.dev['secret'] = "$2y$10$IKTMx1reCFHIgOTzqQoPeukNferN5Z10bFol.itjyclfX7BAxtf4m";
      this.http.addObj(this.dev).subscribe((data:any)=>{
        console.log(data);
        if(data.status == "success"){
          sessionStorage.setItem('_token', data._token);
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('logged_in_as', this.login_as);
          localStorage.setItem('id', data.user.id);
          const navigationExtras: NavigationExtras = {
            queryParams: {'users': this.login_as},
          };
          this.router.navigate(['/dashboard'], navigationExtras);
          // this.router.navigate(['/dashboard']);
        }
      });
  }

}
