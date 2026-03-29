import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEvent } from './schedule-event';

describe('ScheduleEvent', () => {
  let component: ScheduleEvent;
  let fixture: ComponentFixture<ScheduleEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
