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
  user = {};

  constructor(private http: RestApiService, private appStore: AppStore, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.getUsers(params['users']);
    });
  }

  getUsers(user){
    this.active[user] = true;
    this.http.url = environment.baseUrl + '4?author=' + sessionStorage.getItem('logged_in_as') + "&table=" + user + "&_token=" + sessionStorage.getItem('_token');
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      if(data['status'] == 'success'){
        sessionStorage.setItem('_token', data._token);
          if(this.active['company']){
            this.companies = data.data;
            if(sessionStorage.getItem('logged_in_as')==user){
              this.user = this.companies.find(x => x.id == +localStorage.getItem('id'));
            }
          }else{
            this.freelancers = data.data;
            if(sessionStorage.getItem('logged_in_as')==user){
              this.user = this.freelancers.find(x => x.id == +localStorage.getItem('id'));
            }
          }
      }else{
        console.log(data['status'])
        sessionStorage.setItem('_token', data._token);
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
      queryParams: {'users': prof},
    };
    this.router.navigate(['/dashboard'], navigationExtras);
  }

}
