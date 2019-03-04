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
  e = {};
  dev ={};
  author = "";
  msg = "";

  constructor(private http: RestApiService, private appStore: AppStore, private router: Router, private authGuard: AuthGuard,) { }

  ngOnInit() {
  }

  login(){
      this.http.url = environment.baseUrl + '3';
      this.dev['table'] = this.author;
      this.dev['secret'] = "$2y$10$IKTMx1reCFHIgOTzqQoPeukNferN5Z10bFol.itjyclfX7BAxtf4m";
      this.http.addObj(this.dev).subscribe((res:any)=>{
        console.log(res);
        if(res['status'] == "success"){
          
          sessionStorage.setItem('_token', res['_token']);
          sessionStorage.setItem('isLoggedIn', 'true');
          if(this.author == 'company'){
            sessionStorage.setItem('user', res['user']['company_name']);
          }else{
            sessionStorage.setItem('user', res['user']['full_name']);
          }

          const navigationExtras: NavigationExtras = {
            queryParams: {'author': this.author,'table': this.author},
          };
          this.router.navigate(['/dashboard'], navigationExtras);
        }else{
          if(res['error']){
            this.msg = res['error'];
          }else{
            this.msg = res['message'];
          }
          if(res['errors']){
            this.e = res['errors'];
          }
        }
      });
  }

}
