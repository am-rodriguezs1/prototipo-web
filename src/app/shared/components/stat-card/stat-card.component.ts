import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stat-card card">
      <div class="stat-card__header">
        <span class="stat-card__overline">{{overline}}</span>
        <div class="stat-card__icon-box" [class]="'icon-box--' + iconColor">
          <span class="material-symbols-outlined">{{icon}}</span>
        </div>
      </div>
      <div class="stat-card__metric">{{value}}</div>
      <div class="stat-card__sub">
        <span [class]="'sub-highlight ' + subColor">
          <span class="material-symbols-outlined trend-icon">{{subColor === 'green' ? 'trending_up' : 'arrow_upward'}}</span>
          {{sub}}
        </span>
        <span class="sub-muted" *ngIf="subMuted">{{subMuted}}</span>
      </div>
    </div>
  `,
  styles: [`
    :host {
      flex: 1;
      min-width: 0;
      display: block;
    }
    .stat-card {
      padding: 20px;
      width: 100%;
    }
    .stat-card__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
    }
    .stat-card__overline {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--color-text-muted);
    }
    .stat-card__icon-box {
      padding: 6px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      .material-symbols-outlined { font-size: 20px; }
    }
    .icon-box--blue   { background: #EFF6FF; color: #2563EB; }
    .icon-box--red    { background: #FEF2F2; color: #DC2626; }
    .icon-box--green  { background: #F0FDF4; color: #16A34A; }
    .icon-box--yellow { background: #FFFBEB; color: #D97706; }

    .stat-card__metric {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 36px;
      color: var(--color-text);
      line-height: 1.1;
    }
    .stat-card__sub {
      font-size: 12px;
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .sub-highlight {
      display: flex; align-items: center; gap: 2px; font-weight: 600;
    }
    .sub-highlight.green { color: #16A34A; }
    .sub-highlight.red   { color: var(--color-danger-100); }
    .sub-muted { color: var(--color-text-muted); font-weight: 400; }
    .trend-icon { font-size: 16px; }
  `]
})
export class StatCardComponent {
  @Input() overline = '';
  @Input() value = '';
  @Input() sub = '';
  @Input() subMuted = '';
  @Input() icon = '';
  @Input() iconColor = 'blue';
  @Input() subColor = '';
}
