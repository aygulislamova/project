import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OProekteComponent } from './o-proekte.component';

describe('OProekteComponent', () => {
  let component: OProekteComponent;
  let fixture: ComponentFixture<OProekteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OProekteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OProekteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
