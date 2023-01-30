import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimnastikaComponent } from './gimnastika.component';

describe('GimnastikaComponent', () => {
  let component: GimnastikaComponent;
  let fixture: ComponentFixture<GimnastikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GimnastikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GimnastikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
