import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MockDataService } from '../../core/services/mock-data.service';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { Alarm } from '../../shared/models/alarm.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatCardComponent, BadgeComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  todayAlarms: Alarm[];

  constructor(public router: Router, private mockData: MockDataService) {
    this.todayAlarms = this.mockData.getTodayAlarms();
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  /** Returns the CSS modifier class for the colored time box */
  getTimeBoxClass(status: string): string {
    const map: { [key: string]: string } = {
      'PENDIENTE':  'time-box--blue',
      'CRÍTICA':    'time-box--red',
      'PROGRAMADO': 'time-box--orange',
      'COMPLETO':   'time-box--green',
    };
    return map[status] ?? 'time-box--blue';
  }

  /** Normalises accented chars so badge type maps to CSS class */
  getStatusType(status: string): string {
    return status.toLowerCase()
      .replace(/[íì]/g, 'i')
      .replace(/[éè]/g, 'e')
      .replace(/[áà]/g, 'a')
      .replace(/[óò]/g, 'o')
      .replace(/[úù]/g, 'u');
  }
}
