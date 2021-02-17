import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutesComponent } from './futes.component';

describe('FutesComponent', () => {
  let component: FutesComponent;
  let fixture: ComponentFixture<FutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
