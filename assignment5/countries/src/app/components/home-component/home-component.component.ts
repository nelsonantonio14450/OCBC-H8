import { Component, OnInit, Input } from '@angular/core';
import { Countries } from 'src/app/models/countries';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  countries: Countries[] = [];
  MainShown = true;
  DetailShown = false;
  SortPopulate: Countries[] = [];
  SortArea: Countries[] = [];

  ID = 0;



  isMain() {
    this.MainShown = !this.MainShown;
  }

  isDetail() {
    this.DetailShown = !this.DetailShown;

  }

  fillID(i: number) {
    this.ID = i;
  }

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


    this.SortArea = this.countries.sort(function (c, d) {
      return c.area - d.area
    });
    this.SortPopulate = this.countries.sort(function (a, b) {
      return b.population - a.population
    });
    //datanya kecampur


    console.log(this.SortPopulate);
    console.log(this.SortArea);
  }





}
