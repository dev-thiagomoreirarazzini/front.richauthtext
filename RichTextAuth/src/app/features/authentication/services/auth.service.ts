import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = environment.apiUrl; // URL do seu backend

    constructor(private http: HttpClient) { }

    googleSignIn(credential: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/auth/google`, { credential });
    }

    initGoogleAuth(): Promise<void> {
        return new Promise((resolve) => {
            window.google.accounts.id.initialize({
                client_id: environment.googleClientId, // Seu Google Client ID
                callback: ({ credential }) => {
                    if (credential) {
                        this.googleSignIn(credential).subscribe({
                            next: (response) => {
                                // Salvar token JWT retornado pelo backend
                                localStorage.setItem('token', response.token);
                            },
                            error: (error) => console.error('Erro na autenticação:', error)
                        });
                    }
                }
            });
            resolve();
        });
    }
}
