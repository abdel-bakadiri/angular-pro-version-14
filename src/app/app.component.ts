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
export class AppComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  container!: ViewContainerRef;
  @ViewChild('location')
  location!: TemplateRef<null>;
  title = 'Angular Pro';
  loginComponent!: ComponentRef<LogInAndSignUpComponent>;

  constructor() {}

  ngAfterContentInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.container.createEmbeddedView(this.location, {
        $implicit: 'abdel',
        location: 'Paris',
      });
    });
  }
  ngOnInit(): void {}
}
