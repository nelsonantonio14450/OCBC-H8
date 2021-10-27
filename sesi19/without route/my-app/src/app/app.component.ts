import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  message = '';
  messages = ['neruson', 'asdasdasd', 'asdasdasd', 'asdasdasd', 'asdasdasd'];


  people = [
    { "name": "ricy", "age": 18, "country": "USA" },
    { "name": "necro", "age": 19, "country": "UK" },
    { "name": "asww", "age": 17, "country": "HK" },
    { "name": "mofph", "age": 19, "country": "MARS" },
    { "name": "asdasd", "age": 17, "country": "USA" },
  ]


  buttonState = true;
  ngOnChanges() { }
  //component sdg di create, tapi blm tmpilkan
  ngOnInit() { }
  ngDoCheck() { }

  //setelah child component sdh dibwt
  //vue -> created
  ngAfterContentInit() { }
  ngAfterContentChecked() { }

  ngOnDestroy() { }

  ngAfterViewInit() { }
  ngAfterViewChecked() { }

  counter = 0;
  addCounter() {
    this.counter++;
  }

  minCounter() {
    this.counter--;
  }

  reseto() {
    this.counter = 0;
  }

  setFalse() {
    this.buttonState = false;
  }
}

