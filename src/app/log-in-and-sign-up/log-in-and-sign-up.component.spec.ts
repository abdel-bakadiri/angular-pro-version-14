import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInAndSignUpComponent } from './log-in-and-sign-up.component';

describe('LogInAndSignUpComponent', () => {
  let component: LogInAndSignUpComponent;
  let fixture: ComponentFixture<LogInAndSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInAndSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInAndSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
