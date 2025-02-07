import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopageComponent } from './lopage.component';

describe('LopageComponent', () => {
  let component: LopageComponent;
  let fixture: ComponentFixture<LopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LopageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
