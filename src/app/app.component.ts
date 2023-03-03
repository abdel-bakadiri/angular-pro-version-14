import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'content-projection';
  loginUser(formValue: any) {
    console.log(`Login: ${JSON.stringify(formValue)} from smart component`);
  }
  createUser(formValue: any) {
    console.log(`Sign up : ${JSON.stringify(formValue)} from smart component`);
  }
}
