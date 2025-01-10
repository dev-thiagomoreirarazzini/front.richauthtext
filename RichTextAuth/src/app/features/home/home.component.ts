import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component'; // Verifique este import

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        SidebarComponent // Certifique-se que está aqui
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent { }