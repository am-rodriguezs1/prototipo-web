import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-indicator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="steps">
      <ng-container *ngFor="let step of steps; let i = index">
        <div class="step" [class.step--active]="currentStep === i+1" [class.step--done]="currentStep > i+1">
          <div class="step__circle">
            <span *ngIf="currentStep <= i+1">{{i+1}}</span>
            <span *ngIf="currentStep > i+1" class="material-symbols-outlined" style="font-size:18px">check</span>
          </div>
          <span class="step__label">{{step}}</span>
        </div>
        <div class="step__line" *ngIf="i < steps.length - 1" [class.step__line--done]="currentStep > i+1"></div>
      </ng-container>
    </div>
  `,
  styles: [`
    .steps { display: flex; align-items: center; gap: 0; padding: 24px 0; }
    .step { display: flex; flex-direction: column; align-items: center; gap: 6px; min-width: 80px; }
    .step__circle {
      width: 40px; height: 40px;
      border-radius: 10px;
      background: #fff;
      color: var(--color-text-muted);
      border: 2px solid var(--color-border);
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 15px;
      font-family: 'Montserrat', sans-serif;
    }
    .step--active .step__circle {
      background: var(--color-primary);
      color: #fff;
      border: 3px solid var(--color-primary-20);
    }
    .step--done .step__circle {
      background: var(--color-primary);
      color: #fff;
      border: 2px solid var(--color-primary-40);
    }
    .step__label {
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--color-text-muted);
    }
    .step--active .step__label, .step--done .step__label { color: var(--color-primary); }
    .step__line {
      flex: 1;
      height: 2px;
      background: var(--color-border);
      margin-bottom: 22px;
    }
    .step__line--done { background: var(--color-primary); }
  `]
})
export class StepIndicatorComponent {
  @Input() steps: string[] = [];
  @Input() currentStep = 1;
}
