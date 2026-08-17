import { Component } from '@angular/core';

interface ScheduleDay {
  day: string;
  shortDay: string;
  date: string;
  enabled: boolean;
  startTime: string;
  endTime: string;
  breakStart: string;
  breakEnd: string;
  slots: number;
}

@Component({
  selector: 'app-doctor-schedule',
  standalone: true,
  imports: [],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css',
})
export class DoctorSchedule {

  readonly schedule: ScheduleDay[] = [
    {
      day: 'Monday',
      shortDay: 'Mon',
      date: 'Aug 17',
      enabled: true,
      startTime: '09:00 AM',
      endTime: '05:00 PM',
      breakStart: '01:00 PM',
      breakEnd: '02:00 PM',
      slots: 14,
    },
    {
      day: 'Tuesday',
      shortDay: 'Tue',
      date: 'Aug 18',
      enabled: true,
      startTime: '09:00 AM',
      endTime: '05:00 PM',
      breakStart: '01:00 PM',
      breakEnd: '02:00 PM',
      slots: 14,
    },
    {
      day: 'Wednesday',
      shortDay: 'Wed',
      date: 'Aug 19',
      enabled: true,
      startTime: '10:00 AM',
      endTime: '04:00 PM',
      breakStart: '01:00 PM',
      breakEnd: '02:00 PM',
      slots: 10,
    },
    {
      day: 'Thursday',
      shortDay: 'Thu',
      date: 'Aug 20',
      enabled: true,
      startTime: '09:00 AM',
      endTime: '05:00 PM',
      breakStart: '01:00 PM',
      breakEnd: '02:00 PM',
      slots: 14,
    },
    {
      day: 'Friday',
      shortDay: 'Fri',
      date: 'Aug 21',
      enabled: true,
      startTime: '09:00 AM',
      endTime: '01:00 PM',
      breakStart: '',
      breakEnd: '',
      slots: 8,
    },
    {
      day: 'Saturday',
      shortDay: 'Sat',
      date: 'Aug 22',
      enabled: false,
      startTime: '',
      endTime: '',
      breakStart: '',
      breakEnd: '',
      slots: 0,
    },
    {
      day: 'Sunday',
      shortDay: 'Sun',
      date: 'Aug 23',
      enabled: false,
      startTime: '',
      endTime: '',
      breakStart: '',
      breakEnd: '',
      slots: 0,
    },
  ];


  get workingDays(): number {
    return this.schedule.filter(day => day.enabled).length;
  }


  get totalSlots(): number {
    return this.schedule.reduce(
      (total, day) => total + day.slots,
      0
    );
  }


  get averageDuration(): string {
    return '30 min';
  }


  get workingHours(): string {
    return '09:00 AM - 05:00 PM';
  }


}
