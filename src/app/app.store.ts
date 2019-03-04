import { Injectable } from '@angular/core';

@Injectable()
export class AppStore {
	
	app = {};
    designers = [];
    developers = [];
    contentWriters = [];
    companies = []
    user = {};
    _token = "";
    errors = {};

	constructor() {}

}