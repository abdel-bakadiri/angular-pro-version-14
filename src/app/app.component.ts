import {
  Component,
  ViewChild,
  ViewContainerRef,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver,
  AfterContentInit,
  Input,
} from '@angular/core';
import { LogInAndSignUpComponent } from './log-in-and-sign-up/log-in-and-sign-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('loginform', { read: ViewContainerRef })
  container!: ViewContainerRef;
  title = 'Angular Pro';

  constructor() {}

  ngAfterContentInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const loginComponent = this.container.createComponent(
        LogInAndSignUpComponent
      );
      loginComponent.setInput('title', ' Dynamic component');
    });
  }

  ngOnInit(): void {}
  loginUser(formValue: any) {
    console.log(`Login: ${JSON.stringify(formValue)} from smart component`);
  }
  createUser(formValue: any) {
    console.log(`Sign up : ${JSON.stringify(formValue)} from smart component`);
  }
}
