import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  resultOfInputTextLength = '';
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }
  showTextLength(event) {
    const _inputText = event.target.value.length;
    this.resultOfInputTextLength = '目前字數：' + _inputText;
    console.log(_inputText);
    if (event.key === 'Escape') {
      console.log('Escape');
      this.resultOfInputTextLength = '';
      event.target.value = '';
    }
  }
}
