import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstServiceComponent } from './first-service.component';

describe('FirstServiceComponent', () => {
  let component: FirstServiceComponent;
  let fixture: ComponentFixture<FirstServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstServiceComponent]
    });
    fixture = TestBed.createComponent(FirstServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
