import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        UserProfileComponent
    ],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    menuItems = [
        { icon: 'person', label: 'Meus dados', route: '/home/profile' },
        { icon: 'note', label: 'Minhas notas', route: '/home/my-notes' },
        { icon: 'share', label: 'Notas compartilhadas', route: '/home/shared-notes' },
        { icon: 'settings', label: 'Configurações', route: '/home/settings' }
    ];

    logout() {
        // Implementar lógica de logout
        console.log('Logout clicked');
    }
}