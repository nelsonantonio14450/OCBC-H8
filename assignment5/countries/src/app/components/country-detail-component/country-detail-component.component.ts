import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-detail-component',
  templateUrl: './country-detail-component.component.html',
  styleUrls: ['./country-detail-component.component.css']
})
export class CountryDetailComponentComponent implements OnInit {
  @Input() Iddata = 0;


  constructor() { }

  ngOnInit(): void {
    console.log(this.Iddata);
  }

}
