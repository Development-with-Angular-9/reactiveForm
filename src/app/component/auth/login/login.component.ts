import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { timeMessage, successDialog, errorMessage } from 'src/app/functions/alerts';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User; 

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  login(): void {
    if(this.loginForm.invalid){
      return Object.values(this.loginForm.controls).forEach(control => {
        // markAsTouched - evitar q el formulario se envie de manera incorrecta
        control.markAsTouched();
      });
    }else {
      // si el formularo es valido 
      this.setUser();
      // console.log(this.user);
      this.authService.login(this.user).subscribe((data:any) => {
        // Adding Alerts
        timeMessage('Iniciando...', 1500).then(() => {
          successDialog('Iniciado correcto').then(() => {
            this.router.navigate(['/home']);
          });
        });
      }, error => {
        errorMessage('Usuario o Contraseña Incorrecta.');
      });
    }    
  }

  // validaciones ---
  // function validation
  get emailValidate(){
    return (
      // this.loginForm.get('email').valid && this.loginForm.get('email').touched
      this.loginForm.get('email').invalid && this.loginForm.get('email').touched
    );
  }

  get passwordValidate(){
    return (
      // this.loginForm.get('password').valid && this.loginForm.get('password').touched
      this.loginForm.get('password').invalid && this.loginForm.get('password').touched
    );
  }
  // creacion de formulario
  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required]]
    })
  }

  setUser():void {
    this.user = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };    
  }
}
