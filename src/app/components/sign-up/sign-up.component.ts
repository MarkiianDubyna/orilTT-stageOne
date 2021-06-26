import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators,} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from 'src/app/services';
import {IUser} from 'src/models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: IUser

  signUpForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    addressLine: new FormControl(''),
    suite: new FormControl(''),
    city: new FormControl(''),
    zipCode: new FormControl('')
  })

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  signUp(): void {
    this.user = {
      name: this.signUpForm.controls.fullName.value,
      userName: this.signUpForm.controls.userName.value,
      email: this.signUpForm.controls.email.value,
      phone: this.signUpForm.controls.phoneNumber.value,
      address: {
        street: this.signUpForm.controls.addressLine.value,
        suite: this.signUpForm.controls.suite.value,
        city: this.signUpForm.controls.city.value,
        zipcode: this.signUpForm.controls.zipCode.value,
      }
    };
    this.userService.postUser(this.user).subscribe(value => {
      console.log(value)
    });
    this.router.navigate(['todoList'])
  }
}
