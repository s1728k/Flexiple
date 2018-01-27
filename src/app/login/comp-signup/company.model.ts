export class Company {
	id: number;
	company_name: string;
	full_name: string;
	tel: number;
	skype: string;
	email: string;
	password: string;
	have_referral: boolean;
	referralCode: string;;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}