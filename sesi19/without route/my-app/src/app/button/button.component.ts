import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() name = '';
  constructor() { }



  @Output() clickEventHandler = new EventEmitter(); //ini gk ush pke <string> karna gk lempar apa2

  buttonClick() {
    this.clickEventHandler.emit(); //lempar event handler ke app compo punya
  }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log("btn hancur");
  }

}
