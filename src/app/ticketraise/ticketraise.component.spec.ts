import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketraiseComponent } from './ticketraise.component';

describe('TicketraiseComponent', () => {
  let component: TicketraiseComponent;
  let fixture: ComponentFixture<TicketraiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketraiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketraiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
