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
  e = {};

  constructor(private http: RestApiService, private appStore: AppStore, private router: Router,) { }

  ngOnInit() {
  }

  onPwopen(){
  	this.pwShow = !this.pwShow;
  }

  saveDev(){
      this.http.url = environment.baseUrl + '1';
      this.dev['table'] = this.dev['profession'];
      this.dev['secret'] = "$2y$10$IKTMx1reCFHIgOTzqQoPeukNferN5Z10bFol.itjyclfX7BAxtf4m";
      this.http.addObj(this.dev).subscribe((res:any)=>{
        console.log(res);
        if(res['status']=='success'){
          if(res['data']['errors']){
            this.e = res['data']['errors'];
            console.log(this.e);
          }
        }else{
          console.log(res);
        }
      });
  }

}
