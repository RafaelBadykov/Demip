import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Demip';

  onTextbookButtonClick(): void {
    window.open('https://drive.google.com/file/d/1zYqXLgQ5FQqgviDIeTf_2vRdZHUhXPSn/view?usp=sharing');
  }
}
