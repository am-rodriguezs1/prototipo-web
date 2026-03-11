import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MockDataService } from '../../../core/services/mock-data.service';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { Alarm } from '../../../shared/models/alarm.model';

@Component({
  selector: 'app-gestor-alarmas',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './gestor-alarmas.component.html',
  styleUrls: ['./gestor-alarmas.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GestorAlarmasComponent {
  activeTab: 'todos' | 'pendientes' | 'completados' = 'todos';
  selectedDay = 10;

  // null = out-of-month day; number = in-month day
  calendar: (number | null)[][] = [
    [null, null, null, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, null],
  ];

  dayNames = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];

  selectedDayAlarms: Alarm[] = [];

  constructor(public router: Router, public mockData: MockDataService) {
    this.selectedDayAlarms = this.mockData.getAlarmsByDay(this.selectedDay);
  }

  selectDay(day: number | null): void {
    if (!day) return;
    this.selectedDay = day;
    this.selectedDayAlarms = this.mockData.getAlarmsByDay(day);
  }

  hasDots(day: number | null): boolean {
    if (!day) return false;
    return !!this.mockData.calendarDots[day];
  }

  getDots(day: number | null): string[] {
    if (!day) return [];
    return this.mockData.calendarDots[day] || [];
  }

  getBadgeType(type: string): string {
    return type.toLowerCase().replace('ó', 'o').replace('ú', 'u').replace('é', 'e');
  }
}
