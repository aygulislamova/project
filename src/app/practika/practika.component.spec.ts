import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractikaComponent } from './practika.component';

describe('PractikaComponent', () => {
  let component: PractikaComponent;
  let fixture: ComponentFixture<PractikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
