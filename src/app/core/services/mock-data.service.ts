import { Injectable } from '@angular/core';
import { Alarm } from '../../shared/models/alarm.model';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  readonly alarms: Alarm[] = [
    // Día 10 — exactamente 3 alarmas como en el mockup
    { id: 1, title: 'Vacunación Aftosa', type: 'SANITARIA', status: 'PENDIENTE', time: '08:00', date: '2026-10-10', location: 'Lote A (35 Animales)', day: 10 },
    { id: 2, title: 'Chequeo Celo - #405 Lola', type: 'INSEMINACIÓN', status: 'CRÍTICA', time: '09:30', date: '2026-10-10', location: 'Establo Principal', day: 10 },
    { id: 3, title: 'Revisar Saladeros (Stock Verde)', type: 'NUTRICIÓN', status: 'PROGRAMADO', time: '11:30', date: '2026-10-10', location: 'Campo', assignee: 'Roberto', day: 10 },
    // Día 11
    { id: 4, title: 'Control peso Lote B', type: 'SANITARIA', status: 'PENDIENTE', time: '09:00 AM', date: '2026-10-11', location: 'Báscula', day: 11 },
    { id: 5, title: 'Revisión de Preñada #28', type: 'REPRODUCCIÓN', status: 'PROGRAMADO', time: '14:00', date: '2026-10-11', location: 'Potrero Norte', day: 11 },
    // Día 13
    { id: 6, title: 'Desparasitación General', type: 'SANITARIA', status: 'PROGRAMADO', time: '07:00 AM', date: '2026-10-13', location: 'Manga', day: 13 },
    { id: 7, title: 'Suministro Vitaminas', type: 'NUTRICIÓN', status: 'PENDIENTE', time: '15:00', date: '2026-10-13', location: 'Establo 1', day: 13 },
    // Día 15
    { id: 8, title: 'Inseminación Lote C', type: 'INSEMINACIÓN', status: 'PROGRAMADO', time: '10:00 AM', date: '2026-10-15', location: 'Potrero Sur', day: 15 },
    // Dashboard today alarms (primeros 3 del día 10 ya quedan bien)
  ];

  readonly calendarDots: { [day: number]: string[] } = {
    2: ['primary'],
    10: ['primary', 'danger'],
    11: ['primary'],
    13: ['primary', 'primary'],
    15: ['primary'],
  };

  readonly weekAhead = [
    { day: 'LUN 11', label: 'LUN 11', count: 2 },
    { day: 'MAR 12', label: 'MAR 12', count: 0 },
    { day: 'MIÉ 13', label: 'MIÉ 13', count: 5 },
    { day: 'JUE 14', label: 'JUE 14', count: 1 },
    { day: 'VIE 15', label: 'VIE 15', count: 3 },
    { day: 'SÁB 16', label: 'SÁB 16', count: 0 },
    { day: 'DOM 17', label: 'DOM 17', count: -1 },
  ];

  getTodayAlarms(): Alarm[] {
    return this.alarms.filter(a => a.day === 10);
  }

  getAlarmsByDay(day: number): Alarm[] {
    return this.alarms.filter(a => a.day === day);
  }
}
