# ReactiveForm - reactiveFormBack (adonisjs github)

This proyect is for working with the project reactiveFormBack is the creation 
of login, register reactive forms. 

# Formularios Reactivos
import { ReactiveFormsModule } from '@angular/forms';
# register.component.ts, login.component.ts 
import { FormGroup } from '@angular/forms';

# component creation

ng g c component/auth/login
ng g c component/auth/register
ng g c component/main/home

# 2) Generate interface user (tener tipados)
ng g i models/user  

# 2) expresion regular
'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'

# 3) Generate services auth
ng g s services/auth

# 3) Add to environment.prod.ts the apiURL - Endpoint
apiURL: 'http://localhost:3333/'

# 3) Create Alerts
npm install sweetalert2 --save
# app - functions - alerts.ts (create file) 
