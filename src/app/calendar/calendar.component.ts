import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  appointments = [];
  selectedDate = new Date();

  dateAdapter: DateAdapter<any>;

  formats: any;

  constructor(private dateAdapter: MomentDateAdapter) {
    this.dateAdapter.setLocale('en-us');
    this.formats = {
      parse: { year: 'numeric', month: 'short', day: 'numeric' },
      display: { year: 'numeric', month: 'long', day: 'numeric' }
    };
  }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    // Load appointments from API or local storage
    // For now, let's create some sample data
    const today = new Date();
    this.appointments.push({ id: 1, title: 'Meeting', start: today, end: new Date(today.getTime() + 2 * 60 * 60000) });
    this.appointments.push({ id: 2, title: 'Lunch', start: new Date(today.getTime() + 3 * 24 * 3600000), end: new Date(today.getTime() + 3 * 24 * 3600000 + 2 * 3600000) });
  }

  addAppointment() {
    const appointment = {
      id: Date.now(),
      title: 'New Appointment',
      start: new Date(this.selectedDate),
      end: new Date(this.selectedDate.getTime() + 1 * 60 * 60000)
    };
    this.appointments.push(appointment);
  }

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter(a => a.id !== id);
  }

  moveAppointment(event: any) {
    const appointment = event.item;
    const newDate = new Date(this.selectedDate.getTime());
    newDate.setHours(newDate.getHours() + event.newIndex);
    appointment.start = newDate;
    appointment.end = new Date(newDate.getTime() + 1 * 60 * 60000);
    this.appointments = this.appointments.map(a => a.id === appointment.id ? appointment : a);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
    }
  }

  moveAppointment(event: any) {
    const appointment = event.item;
    const newDate = new Date(this.selectedDate.getTime());
    newDate.setHours(newDate.getHours() + event.newIndex);
    appointment.start = newDate;
    appointment.end = new Date(newDate.getTime() + 1 * 60 * 60000);
    this.appointments = this.appointments.map(a => a.id === appointment.id ? appointment : a);
  }
}
