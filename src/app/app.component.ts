import {
  Component,
  ViewChild,
  ViewContainerRef,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver,
  AfterContentInit,
  Input,
  ComponentRef,
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
  loginComponent!: ComponentRef<LogInAndSignUpComponent>;

  constructor() {}

  ngAfterContentInit(): void {}

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   const loginComponent = this.container.createComponent(
    //     LogInAndSignUpComponent
    //   );
    //   this.loginComponent = loginComponent;
    //   console.log(loginComponent);
    //   loginComponent.instance.emitValueForm.subscribe(this.login);
    //   loginComponent.setInput('title', ' Dynamic component');
    // });
  }

  login(user: any) {
    console.log(user);
  }

  ngOnInit(): void {}
  loginUser(formValue: any) {
    console.log(`Login: ${JSON.stringify(formValue)} from smart component`);
  }
  createUser(formValue: any) {
    console.log(`Sign up : ${JSON.stringify(formValue)} from smart component`);
  }
  onCreateComponent() {
    this.loginComponent = this.container.createComponent(
      LogInAndSignUpComponent
    );
    const secondeComponent = this.container.createComponent(
      LogInAndSignUpComponent,
      { index: 0 }
    );
    secondeComponent.setInput('title', 'display me as first one');
  }

  handleMoveComponent() {
    this.container.move(this.loginComponent.hostView, 0);
  }

  onDestroyComponent() {
    this.loginComponent.destroy();
  }
}
