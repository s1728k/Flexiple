import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { AppStore } from '../app.store'
import { Company } from '../login/comp-signup/company.model';
import { Dev } from '../login/dev-signup/dev.model'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	freelancers: Dev[];
	companies: Company[];
  active = {};
  user = "";
  author="";
  table="";

  constructor(private http: RestApiService, private appStore: AppStore, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
    };
    this.route.queryParams.subscribe(params => {
      this.author = params['author'];
      this.table = params['table'];
      this.user = sessionStorage.getItem('user');
      this.active[this.table] = true;
      this.getUsers();
    });
  }

  getUsers(){
    this.http.url = environment.baseUrl + '4?author=' + this.author + "&table=" + this.table + "&_token=" + sessionStorage.getItem('_token');
    this.http.getObjs().subscribe((res)=>{
      if(res['status'] == 'success'){
        sessionStorage.setItem('_token', res['_token']);
          if(this.active['company']){
            this.companies = res['data'];
          }else{
            this.freelancers = res['data'];
          }
      }else{
        console.log(res['error'])
        sessionStorage.setItem('_token', res['_token']);
        this.freelancers=[];
        this.companies=[];
      }
    });
  }

  logoutFreelancer(){
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('logged_in_as');
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  routing(prof){
    this.active = {};
    const navigationExtras: NavigationExtras = {
      queryParams: {'author': this.author,'table': prof},
    };
    this.router.navigate(['/dashboard'], navigationExtras);
  }

}
