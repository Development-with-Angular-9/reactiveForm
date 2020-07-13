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

# Generate interface user (tener tipados)
ng g i models/user  

# expresion regular
'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'