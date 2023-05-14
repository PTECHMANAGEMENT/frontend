import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient) { }
	isAuthenticated(username: string, password: string) {
		const loginModel: LoginModel = {username, password};
		this.http.post<{message: string, TOKEN: string}>(environment.API_URL + 'api/auth/login', {username, password})
		.subscribe((response) => {
			console.log(response);
		// 	// if (response.TOKEN) {
		// 	// 	localStorage.setItem('token', response.TOKEN);
		// 	// 	return true;
		// 	// }
		// 	return false;
		});
	}
}
