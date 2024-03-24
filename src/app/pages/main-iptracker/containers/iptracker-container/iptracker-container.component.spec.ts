import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptrackerContainerComponent } from './iptracker-container.component';

describe('IptrackerContainerComponent', () => {
  let component: IptrackerContainerComponent;
  let fixture: ComponentFixture<IptrackerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IptrackerContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IptrackerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
