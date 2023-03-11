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
  TemplateRef,
} from '@angular/core';
import { LogInAndSignUpComponent } from './log-in-and-sign-up/log-in-and-sign-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Pro course';
  context = { $implicit: 'abdel', location: 'Paris' };
  user: any = {
    name: 'abdel',
    location: 'Paris',
  };

  handleUpdateName() {
    this.user.name = 'abdou';
  }

  handleAddProperty() {
    this.user.email = 'contact@gmail.com';
  }

  handleImmutableObject() {
    this.user = {
      name: 'Abdelouhab',
      location: 'Rabat',
    };
  }
}
