import { Injectable } from '@angular/core';

@Injectable()
export class AppStore {
	
	freelancers = [];
	companies = [];
	loggedInUser = {};

	constructor() {}

}