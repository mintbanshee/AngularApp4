import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { rsvpItem } from '../../models/rsvp.model';
import { DialogComponent } from '../dialog/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatDialogModule],
  templateUrl: './rsvp-form.html',
  styleUrls: ['./rsvp-form.css'],
})


export class RsvpForm {
  rsvp: rsvpItem = {
    eventId: null,
    name: '',
    email: '',
    attending: '',
    plusOne: '',
    message: ''
  };

  constructor(
    // inject MatDialog to open dialog on form submission
    // I chose to use dialog instead of snackbar because it looks nicer and
    // is more noticeable to the user. 
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  eventId: number | null = null;

  ngOnInit(): void {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.rsvp.eventId = this.eventId;
  }

  // handle form submission and make sure required fields are filled in
  submitRsvp(form: NgForm): void {
    if (form.invalid) {
      this.dialog.open(DialogComponent, {
        data: { 
          title: 'Something is missing!',
          message: 'Please check for any empty fields.' }
      });
      return;
    }

    this.dialog.open(DialogComponent, {
      data: { 
        title: 'Success!', 
        message: 'Your RSVP has been submitted!' }
    });

    // reset form after submission
    form.resetForm({
      name: '',
      email: '',
      attending: '',
      plusOne: '',
      message: ''
    });
  }

}
