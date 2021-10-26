import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  message = '';
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

