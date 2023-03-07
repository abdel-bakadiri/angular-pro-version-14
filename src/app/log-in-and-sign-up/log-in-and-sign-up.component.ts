import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  Renderer2,
} from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { RememberMeComponent } from '../remember-me/remember-me.component';

@Component({
  selector: 'app-log-in-and-sign-up',
  templateUrl: './log-in-and-sign-up.component.html',
  styleUrls: ['./log-in-and-sign-up.component.scss'],
})
export class LogInAndSignUpComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  @Output() emitValueForm = new EventEmitter<any>();
  @ContentChild(RememberMeComponent) rememberMe!: RememberMeComponent;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('reset') reset!: ElementRef;
  @ViewChild(MessageComponent) message!: MessageComponent;
  // @ViewChildren(MessageComponent) messages!: QueryList<MessageComponent>;
  showMessage: boolean = false;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    if (this.email) {
      this.renderer.setAttribute(
        this.email.nativeElement,
        'placeholder',
        'put your email here'
      );
      this.renderer.addClass(this.email.nativeElement, 'email');
      // this.email.nativeElement.focus();
      // this.email.nativeElement.setAttribute('placeholder', 'Put your email');
      // this.email.nativeElement.classList.add('email');
      this.email.nativeElement.focus();
    }
    if (this.reset) {
      console.log(this.reset.nativeElement);
    }
  }

  ngAfterContentInit(): void {
    if (this.message) {
      console.log('ViewChild', this.message);
    }
    if (this.rememberMe) {
      this.rememberMe.isCheckedEventEmitter.subscribe((isChecked) => {
        this.showMessage = isChecked;
      });
    }
  }

  ngOnInit(): void {}

  onNgForm(formValue: any) {
    this.emitValueForm.emit(formValue);
  }
}
