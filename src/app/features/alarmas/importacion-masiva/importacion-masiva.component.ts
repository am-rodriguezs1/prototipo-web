import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StepIndicatorComponent } from '../../../shared/components/step-indicator/step-indicator.component';
import { Step1CargarComponent } from './steps/step1-cargar/step1-cargar.component';
import { Step2ValidacionComponent } from './steps/step2-validacion/step2-validacion.component';
import { Step3ConfirmacionComponent } from './steps/step3-confirmacion/step3-confirmacion.component';
import { MockRow } from './steps/step2-validacion/step2-validacion.component';

@Component({
  selector: 'app-importacion-masiva',
  standalone: true,
  imports: [
    CommonModule,
    StepIndicatorComponent,
    Step1CargarComponent,
    Step2ValidacionComponent,
    Step3ConfirmacionComponent
  ],
  templateUrl: './importacion-masiva.component.html',
  styleUrls: ['./importacion-masiva.component.scss']
})
export class ImportacionMasivaComponent {
  currentStep = 1;
  fileSelected = false;
  showSuccess = false;

  steps = ['CARGAR ARCHIVO', 'VALIDAR DATOS', 'CONFIRMAR'];

  mockRows: MockRow[] = [
    { num: 1, codVisual: 'CV-00123', codElectronico: '982000345123456', tipo: 'Sanitaria',    hora: '06:00', fechaNac: '2022-05-15', estado: 'Válido',          isError: false },
    { num: 2, codVisual: 'CV-00124', codElectronico: '982000345123457', tipo: 'Reproducción', hora: '12:00', fechaNac: '2022-05-20', estado: 'Válido',          isError: false },
    { num: 3, codVisual: 'CV-00125', codElectronico: 'Vacío',           tipo: 'Nutrición',    hora: '14:00', fechaNac: '2022-06-01', estado: 'Falta Campo',     isError: true  },
    { num: 4, codVisual: 'CV-00126', codElectronico: '982000345123459', tipo: 'Sanitaria',    hora: '11:00', fechaNac: '2022-06-10', estado: 'Válido',          isError: false },
    { num: 5, codVisual: 'CV-00127', codElectronico: '982000345123460', tipo: 'Desconocido',  hora: 'X',     fechaNac: '2022-07-11', estado: 'Formato Inválido', isError: true  },
    { num: 6, codVisual: 'CV-00128', codElectronico: '982000345123461', tipo: 'Reproducción', hora: '13:00', fechaNac: '2022-07-02', estado: 'Válido',          isError: false },
  ];

  constructor(private router: Router) {}

  onArchivoSeleccionado(fileName: string): void {
    this.fileSelected = !!fileName;
  }

  next(): void { if (this.currentStep < 3) this.currentStep++; }

  back(): void {
    if (this.currentStep > 1) {
      this.currentStep = 1;
      this.fileSelected = false;
    }
  }

  iniciar(): void {
    this.showSuccess = true;
    setTimeout(() => { this.router.navigate(['/app/alarmas']); }, 2000);
  }

  cancelar(): void { this.router.navigate(['/app/alarmas']); }
}
