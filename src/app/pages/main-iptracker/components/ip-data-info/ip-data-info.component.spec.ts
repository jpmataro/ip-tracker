import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDataInfoComponent } from './ip-data-info.component';

describe('IpDataInfoComponent', () => {
  let component: IpDataInfoComponent;
  let fixture: ComponentFixture<IpDataInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpDataInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpDataInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
