import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(public auth: AuthService) {}

  navItems = [
    { label: 'Panel de Control', route: '/app/dashboard', icon: 'dashboard' },
    { label: 'Gestión Ganado',   route: '/app/ganado',    icon: 'pets' },
    { label: 'Gestor Alarmas',   route: '/app/alarmas',   icon: 'notifications_active' },
    { label: 'Reportes',         route: '/app/reportes',  icon: 'bar_chart' },
    { label: 'Configuración',    route: '/app/config',    icon: 'settings' },
  ];
}
