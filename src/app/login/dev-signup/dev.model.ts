export class Dev {
	id: number;
	full_name: string;
	tel: number;
	skype: string;
	profession: string;
	email: string;
	password: string;
	confirm_password: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}