import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWinesComponent } from './all-wines.component';

describe('AllWinesComponent', () => {
  let component: AllWinesComponent;
  let fixture: ComponentFixture<AllWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
