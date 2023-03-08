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
  Input,
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
  @Input() title!: string;
  @Output() emitValueForm = new EventEmitter<any>();

  constructor() {}

  ngAfterViewInit(): void {}

  ngAfterContentInit(): void {}

  ngOnInit(): void {}

  onNgForm(formValue: any) {
    console.log(formValue);
    this.emitValueForm.emit(formValue);
  }
}
