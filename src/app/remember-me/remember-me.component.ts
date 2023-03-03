import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-remember-me',
  templateUrl: './remember-me.component.html',
  styleUrls: ['./remember-me.component.scss'],
})
export class RememberMeComponent implements OnInit {
  isCheckedEventEmitter = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  onChecked(checkedObj: any) {
    const isChecked = checkedObj.target.checked;
    this.isCheckedEventEmitter.emit(isChecked);
  }
}
