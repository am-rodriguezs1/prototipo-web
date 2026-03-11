import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step1-cargar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step1-cargar.component.html',
  styleUrls: ['./step1-cargar.component.scss']
})
export class Step1CargarComponent {
  @Output() archivoSeleccionado = new EventEmitter<string>();

  isDragOver = false;
  fileSelected = false;
  fileName = '';

  onDragOver(e: DragEvent): void {
    e.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(): void {
    this.isDragOver = false;
  }

  onDrop(e: DragEvent): void {
    e.preventDefault();
    this.isDragOver = false;
    const file = e.dataTransfer?.files[0];
    if (file) { this.selectFile(file.name); }
  }

  onFileInput(e: Event): void {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) { this.selectFile(file.name); }
  }

  private selectFile(name: string): void {
    this.fileSelected = true;
    this.fileName = name;
    this.archivoSeleccionado.emit(name);
  }
}
