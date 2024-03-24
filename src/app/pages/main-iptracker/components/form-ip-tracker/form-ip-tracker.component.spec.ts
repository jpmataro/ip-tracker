import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIpTrackerComponent } from './form-ip-tracker.component';

describe('FormIpTrackerComponent', () => {
  let component: FormIpTrackerComponent;
  let fixture: ComponentFixture<FormIpTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormIpTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormIpTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
