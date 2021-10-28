import { Component, OnInit, Input } from '@angular/core';
import { Countries } from 'src/app/models/countries';

@Component({
  selector: 'app-country-detail-component',
  templateUrl: './country-detail-component.component.html',
  styleUrls: ['./country-detail-component.component.css']
})
export class CountryDetailComponentComponent implements OnInit {
  @Input() Iddata = 0;
  countries: Countries[] = [];

  constructor() { }

  ngOnInit(): void {
    this.countries = [
      {
        name: 'america',
        capital: 'washington DC',
        area: 9,
        population: 6,
        GDP: 180000,
        currency: 'USD'
      },
      {
        name: 'Russia',
        capital: 'Moscow',
        area: 31,
        population: 99,
        GDP: 180000,
        currency: 'Rub'
      },
      {
        name: 'China',
        capital: 'Beijing',
        area: 200,
        population: 8,
        GDP: 180000,
        currency: 'Yuan'
      }, {
        name: 'United Kingdom',
        capital: 'London',
        area: 120,
        population: 11,
        GDP: 180000,
        currency: 'Euro'
      }, {
        name: 'Indonesia',
        capital: 'Jakarta',
        area: 300,
        population: 20,
        GDP: 180000,
        currency: 'Rupiah'
      }
    ]
  }

}
