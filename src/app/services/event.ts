import { Injectable } from '@angular/core';
import { EventItem } from '../models/event.model';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

// service to handle CRUD and API calls from db.json 
export class EventService {
  private apiUrl = 'http://localhost:3000/events';
  private refreshRequired = new Subject<void>();

  refreshRequired$ = this.refreshRequired.asObservable();

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventItem[]> {
    return this.http.get<EventItem[]>(this.apiUrl);
  }

  getEventById(id: number): Observable<EventItem> {
    return this.http.get<EventItem>(`${this.apiUrl}/${id}`);
  }

  createEvent(event: EventItem): Observable<EventItem> {
    return this.http.post<EventItem>(this.apiUrl, event).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    );
  }

  updateEvent(id: number, event: EventItem): Observable<EventItem> {
    return this.http.put<EventItem>(`${this.apiUrl}/${id}`, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
}
