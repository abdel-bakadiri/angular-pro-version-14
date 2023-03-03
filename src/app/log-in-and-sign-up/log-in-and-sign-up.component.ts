import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChild,
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
  @ViewChild(MessageComponent) message!: MessageComponent;
  @ContentChild(RememberMeComponent) rememberMe!: RememberMeComponent;
  // @ContentChildren(RememberMeComponent)
  // rememberMe!: QueryList<RememberMeComponent>;
  showMessage: boolean = false;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.message.days = 50;
    this.changeDetectorRef.detectChanges();
    // setTimeout(() => {
    //   this.message.days = 30;
    // }, 1000);
  }

  ngAfterContentInit(): void {
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
