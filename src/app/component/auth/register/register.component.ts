import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // load constructor
    this.createFrom();
  }


  ngOnInit(): void {
  }

  register(): void {
    console.log(this.registerForm.value)
  }

  //method - function
  createFrom(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]]
    });
  }

  // function validation
  get emailValidate(){
    return (
      this.registerForm.get('email').valid && this.registerForm.get('email').touched
    );
  }

  get passwordValidate(){
    return (
      this.registerForm.get('password').valid && this.registerForm.get('password').touched
    );
  }
  get password2Validate(){
    const pass = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    return pass === pass2 ? false : true;
  }
}
