import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChatbot } from './patient-chatbot';

describe('PatientChatbot', () => {
  let component: PatientChatbot;
  let fixture: ComponentFixture<PatientChatbot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientChatbot],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientChatbot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
