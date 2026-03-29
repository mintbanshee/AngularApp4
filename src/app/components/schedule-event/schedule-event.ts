// regular imports
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormGroupDirective, Validators } from '@angular/forms';
import { EventService } from '../../services/event';
import { guestCapacityValidator } from '../../validators/guest-capacity.validator';
import { DialogComponent } from '../dialog/dialog';

// material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from "@angular/material/card";


@Component({
  selector: 'app-schedule-event',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule
  ],
  templateUrl: './schedule-event.html',
  styleUrls: ['./schedule-event.css'],
})

export class ScheduleEvent implements OnInit {
  // viewchild to reset form after submission
  // - this is to fix the issue where the form turned red after submission 
  // and the user had to refresh the page to clear the form
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  eventForm: FormGroup;
  submitting = false;
  eventTypes = ['Wedding', 'Birthday', 'Vendor Market', 'Tea Party', 'Other'];

  ngOnInit(): void {
    // fetch existing events to disable booked dates in the datepicker
  this.eventService.getEvents().subscribe(events => {
    // create an array of booked dates from scheduled events
    this.bookedDates = events.flatMap(event => {
      const dates: Date[] = [];
      const start = new Date(event.startDate);
      const end = new Date(event.endDate);

      // loop through the dates from start to end and add them to the bookedDates array
      const current = new Date(start);
      while (current <= end) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
      }
      return dates;
    }); 
  });
}

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private dialog: MatDialog
  ) {
    this.eventForm = this.fb.group(
      {
          hostName: ['', [Validators.required, Validators.minLength(3)]],
          contactEmail: ['', [Validators.required, Validators.email]],
          eventName: ['', [Validators.required, Validators.minLength(3)]],
          eventType: ['', Validators.required],
          startDate: ['', Validators.required],
          endDate: ['', Validators.required],
          // my custom validator - keep guest number under max capacity 
          guestEstimate: ['', [Validators.required, Validators.min(4), guestCapacityValidator(100)]],
          eventDescription: ['', [Validators.required, Validators.minLength(10)]],
          notes: [''],
          depositPaid: [false]
      },
    );
  }

onSubmit(): void {
  // if the form is not properly filled out, flag the errors and show a dialog to the user
  if (this.eventForm.invalid) {
    console.log('Form valid:', this.eventForm.valid);
    console.log('Form errors:', this.eventForm.errors);

    // log values and errors for each input field to help with debugging
    Object.keys(this.eventForm.controls).forEach(key => {
      const control = this.eventForm.get(key);
      console.log(key, control?.value, control?.errors);
    });

    // mark all fields as touched to trigger validation messages
    this.eventForm.markAllAsTouched();
    this.dialog.open(DialogComponent, {
      data: {
        title: 'Invalid Form',
        message: 'Please enter all required information before submitting.'
      }
    });
    return;
  }

  // if the form is filled in properly submit and show success dialog
  this.submitting = true;

  const formValue = {
    ...this.eventForm.value,
    startDate: this.eventForm.value.startDate.toISOString(),
    endDate: this.eventForm.value.endDate.toISOString()
  };

  this.eventService.createEvent(formValue).subscribe({
    next: () => {
      this.submitting = false;
      this.dialog.open(DialogComponent, {
        data: {
          title: 'Success',
          message: 'Event scheduled successfully!'
        }
      });

      // reset the form after successful submission
      this.formDirective.resetForm({
        hostName: '',
        contactEmail: '',
        eventName: '',
        eventType: '',
        startDate: null,
        endDate: null,
        guestEstimate: '',
        eventDescription: '',
        notes: '',
        depositPaid: false
      });

      this.eventForm.markAsPristine();
      this.eventForm.markAsUntouched();
      this.eventForm.updateValueAndValidity();
    },
    error: () => {
      this.submitting = false;
      this.dialog.open(DialogComponent, {
        data: {
          title: 'Something went wrong',
          message: 'Please try again.'
        }
      });
    }
  });
}
// getter for easy access to form controls
  get f() {
    return this.eventForm.controls;
  }

  // array to hold booked dates for datepicker filtering
  bookedDates: Date[] = [];

  // filter function to disable booked dates in the datepicker
  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;

    // check if date is available by comparing to the booked array created higher up in the ngOnInit
    return !this.bookedDates.some(d =>
      d.toDateString() === date.toDateString()
    );
  };
}
