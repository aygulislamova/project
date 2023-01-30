import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgriComponent } from './igri.component';

describe('IgriComponent', () => {
  let component: IgriComponent;
  let fixture: ComponentFixture<IgriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
