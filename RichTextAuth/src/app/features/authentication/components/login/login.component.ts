import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;

      // Simula uma validação de login
      setTimeout(() => {
        const { email, password } = this.loginForm.value;
        if (email === 'teste@teste.com' && password === '123456') {
          alert('Login bem-sucedido!');
        } else {
          this.errorMessage = 'Credenciais inválidas.';
        }
        this.isLoading = false;
      }, 1500); // Simula tempo de processamento
    }
  }
}
