import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './models/user.model';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
    user: User = {
        id: 1,
        name: 'Usuário Exemplo',
        email: 'usuario@exemplo.com',
        photoUrl: 'assets/images/default-avatar.png'
    };
} 