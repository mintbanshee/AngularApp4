// components/event-list/event-list.ts

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../services/event';
import { EventItem } from '../../models/event.model';

import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule],
  templateUrl: './event-list.html',
  styleUrls: ['./event-list.css'],
})

// display the scheduled events 
export class EventList implements OnInit {
  events: EventItem[] = []; 
  loading: boolean = true;

  constructor(
    private eventService: EventService,
    private dialog: MatDialog,
    // inject change detector to force the UI to update
    // this is to fix the dashboard getting stuck on loading the events
    private cdr: ChangeDetectorRef
  ) {}

  // load events when dashboard opens
  // watch for changes to db.json so can update when changes are made
  ngOnInit(): void {
    this.loadEvents();

    // reload events when the eventService says changes have been made
    this.eventService.refreshRequired$.subscribe({
      next: () => {
        this.loadEvents();
      },
      error: () => {
        this.loading = false;
        this.dialog.open(DialogComponent, {
          data: {
            title: 'Error',
            message: 'Failed to load events.'
          }
        });
      }
    });
  }
  // load from db.json
  loadEvents(): void {
    this.loading = true;

    this.eventService.getEvents().subscribe({ 
      next: (data) => {
        this.events = data;
        this.loading = false;
        // force events to update when navigating back to dashboard 
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.dialog.open(DialogComponent, {
          data: {
            title: 'Error',
            message: 'Failed to load events.'
          }
        });
        this.cdr.detectChanges();
      }
    });
  }
}