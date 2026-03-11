import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-alarma',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-alarma.component.html',
  styleUrls: ['./crear-alarma.component.scss']
})
export class CrearAlarmaComponent {
  tipoSeleccionado: string = 'Sanitaria';
  titulo = '';
  sonido = 'Alerta Clásica';
  aplicaA: 'individual' | 'grupo' = 'individual';
  buscarId = '';
  lote = '';
  fecha = '10/10/2023';
  hora = '09:30 AM';
  repeticion = 'Solo una vez';

  tipos = [
    { label: 'Sanitaria',    icon: 'medical_services' },
    { label: 'Nutrición',    icon: 'restaurant'       },
    { label: 'Reproducción', icon: 'favorite'         },
    { label: 'Otra',         icon: 'more_horiz'       },
  ];

  showToast = false;

  constructor(private router: Router) {}

  guardar(): void {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
      this.router.navigate(['/app/alarmas']);
    }, 1800);
  }

  cancelar(): void {
    this.router.navigate(['/app/alarmas']);
  }
}
