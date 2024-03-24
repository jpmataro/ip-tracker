import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIptrackerComponent } from './main-iptracker.component';

describe('MainIptrackerComponent', () => {
  let component: MainIptrackerComponent;
  let fixture: ComponentFixture<MainIptrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainIptrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainIptrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
