import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User; 

  constructor(private fb: FormBuilder) {
    // load constructor
    this.createFrom();
  }


  ngOnInit(): void {
  }

  // Formulario register
  register(): void {
    // console.log(this.registerForm.value)
    // verificar si el formulario esta invalido
    if(this.registerForm.invalid) {
      return Object.values(this.registerForm.controls).forEach(control => {
        // markAsTouched - evitar q el formulario se envie de manera incorrecta
        control.markAsTouched();
      });
    }else {
      // si el formularo es valido
      this.setUser();
      console.log(this.user)
    }
  }

  //method - function
  createFrom(): void {
    this.registerForm = this.fb.group({
      // email: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]]
    });
  }

  // function validation
  get emailValidate(){
    return (
      // this.registerForm.get('email').valid && this.registerForm.get('email').touched
      this.registerForm.get('email').invalid && this.registerForm.get('email').touched
    );
  }

  get passwordValidate(){
    return (
      // this.registerForm.get('password').valid && this.registerForm.get('password').touched
      this.registerForm.get('password').invalid && this.registerForm.get('password').touched
    );
  }
  get password2Validate(){
    const pass = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    return pass === pass2 ? false : true;
  }

  setUser():void {
    this.user = {
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    };    
  }

}
