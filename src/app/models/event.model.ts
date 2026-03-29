export interface EventItem {
  id: number;
  hostName: string;
  contactEmail: string;
  eventName: string;
  eventType: string;
  startDate: Date;
  endDate: Date;
  guestEstimate: number;
  eventDescription: string;
  notes?: string;
  depositPaid: boolean;
}