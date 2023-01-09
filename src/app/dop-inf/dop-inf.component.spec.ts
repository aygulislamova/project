import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopInfComponent } from './dop-inf.component';

describe('DopInfComponent', () => {
  let component: DopInfComponent;
  let fixture: ComponentFixture<DopInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DopInfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DopInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
