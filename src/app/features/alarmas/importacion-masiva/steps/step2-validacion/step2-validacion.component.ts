import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MockRow {
  num: number;
  codVisual: string;
  codElectronico: string;
  tipo: string;
  hora: string;
  fechaNac: string;
  estado: string;
  isError: boolean;
}

@Component({
  selector: 'app-step2-validacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step2-validacion.component.html',
  styleUrls: ['./step2-validacion.component.scss']
})
export class Step2ValidacionComponent {
  @Input() mockRows: MockRow[] = [];
}
