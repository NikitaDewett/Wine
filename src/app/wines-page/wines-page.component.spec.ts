import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinesPageComponent } from './wines-page.component';

describe('WinesPageComponent', () => {
  let component: WinesPageComponent;
  let fixture: ComponentFixture<WinesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
