import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriyaComponent } from './teoriya.component';

describe('TeoriyaComponent', () => {
  let component: TeoriyaComponent;
  let fixture: ComponentFixture<TeoriyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeoriyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeoriyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
