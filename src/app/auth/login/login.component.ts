import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { AuthService } from '../auth.service';
function passwordValidator(control: FormControl) {
	const password = control.value;
	const hasUppercase = /[A-Z]/.test(password);
	const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
	const valid = hasUppercase && hasSpecialChar;
=======

// function passwordValidator(control: FormControl) {
// 	const password = control.value;
// 	const hasUppercase = /[A-Z]/.test(password);
// 	const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
// 	const valid = hasUppercase && hasSpecialChar;
>>>>>>> 2c1521c745b6e26a5eb453931c8fadf12692eec5

// 	if (!hasUppercase) {
// 		return { missingUppercase: true };
// 	}

// 	if (!hasSpecialChar) {
// 		return { missingSpecialChar: true };
// 	}

// 	return null;
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
	valid : boolean = false;
	form: FormGroup = new FormGroup({
		username: new FormControl(null, {
			validators: [Validators.required],
		}),
		password: new FormControl('', [
			Validators.required,
		])
	});
	constructor(public AuthService: AuthService) { }

	ngOnInit(): void {
	}

<<<<<<< HEAD
	get passwordErrorMessage() {
		const passwordControl = this.form.get('password');
		if (passwordControl?.touched)
		{
			if (passwordControl?.hasError('required'))
			  return 'Password is required';
			else if (passwordControl?.hasError('minlength'))
			  return 'Password must be at least 8 characters long';
			else if (passwordControl?.errors?.['missingUppercase'])
				return 'Password must contain at least one uppercase letter';
			else if (passwordControl?.errors?.['missingSpecialChar'])
				return 'Password must contain at least one special character';
		}
		this.valid = true;
		return '';
	}
=======

	// get passwordErrorMessage() {
	// 	const passwordControl = this.form.get('password');
	// 	if (passwordControl?.touched)
	// 	{
	// 		if (passwordControl?.hasError('required'))
	// 		  return 'Password is required';
	// 		else if (passwordControl?.hasError('minlength'))
	// 		  return 'Password must be at least 8 characters long';
	// 		else if (passwordControl?.errors?.['missingUppercase'])
	// 			return 'Password must contain at least one uppercase letter';
	// 		else if (passwordControl?.errors?.['missingSpecialChar'])
	// 			return 'Password must contain at least one special character';
	// 	}
	// 	this.valid = true;
	// 	return '';
	//   }
>>>>>>> 2c1521c745b6e26a5eb453931c8fadf12692eec5

	get usernameErrorMessage() {
		const usernameControl = this.form.get('username');
		if (usernameControl?.touched)
		{
			if (usernameControl?.hasError('required'))
			  return 'Username is required';
		}
		this.valid = true;
		return '';
	}
	onSubmit() {
<<<<<<< HEAD
		if (!this.valid) {
			return;
		}
		this.AuthService.isAuthenticated(this.form.value.username, this.form.value.password)
=======
		console.log(this.form);

>>>>>>> 2c1521c745b6e26a5eb453931c8fadf12692eec5
	}

}
