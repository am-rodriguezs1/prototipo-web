import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="badge badge--{{type}}">{{label}}</span>`,
  styles: [`
    .badge {
      display: inline-block;
      padding: 2px 10px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .badge--sanitaria   { background: #DBEAFE; color: #1E40AF; }
    .badge--nutricion   { background: #DCFCE7; color: #15803D; }
    .badge--reproduccion{ background: #FCE7F3; color: #9D174D; }
    .badge--inseminacion{ background: #FCE7F3; color: #9D174D; }
    .badge--otra        { background: #F3F4F6; color: #374151; }
    .badge--pendiente   { background: #FEF3C7; color: #92400E; }
    .badge--completo    { background: #DCFCE7; color: #15803D; }
    .badge--programado  { background: #DBEAFE; color: #1E40AF; }
    .badge--critica     { background: #FECDCA; color: #B91C1C; }
  `]
})
export class BadgeComponent {
  @Input() label = '';
  @Input() type = 'otra';
}
