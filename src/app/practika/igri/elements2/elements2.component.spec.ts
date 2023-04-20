import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elements2Component } from './elements2.component';

describe('Elements2Component', () => {
  let component: Elements2Component;
  let fixture: ComponentFixture<Elements2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Elements2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elements2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
