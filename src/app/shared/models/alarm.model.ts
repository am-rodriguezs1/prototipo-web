export type AlarmType = 'SANITARIA' | 'NUTRICIÓN' | 'REPRODUCCIÓN' | 'INSEMINACIÓN' | 'OTRA';
export type AlarmStatus = 'PENDIENTE' | 'COMPLETO' | 'PROGRAMADO' | 'CRÍTICA';

export interface Alarm {
  id: number;
  title: string;
  type: AlarmType;
  status: AlarmStatus;
  time: string;
  date: string;
  location: string;
  assignee?: string;
  day: number; // day of month for calendar
}
