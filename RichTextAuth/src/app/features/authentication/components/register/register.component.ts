import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    registerForm: FormGroup;
    isSubmitting = false;

    constructor(private fb: FormBuilder, private router: Router) {
        this.registerForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required]],
        });
    }

    onSubmit() {
        if (this.registerForm.valid) {
            const { password, confirmPassword } = this.registerForm.value;
            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }

            this.isSubmitting = true;

            try {
                setTimeout(() => {
                    alert('Registro realizado com sucesso!');
                    this.isSubmitting = false;
                    this.router.navigate(['/login']).then(() => {
                        console.log('Navegação para login realizada com sucesso');
                    }).catch(error => {
                        console.error('Erro na navegação:', error);
                    });
                }, 1500);
            } catch (error) {
                this.isSubmitting = false;
                console.error('Erro no registro:', error);
            }
        }
    }
}
