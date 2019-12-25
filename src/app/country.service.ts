import { Injectable } from '@angular/core';
import {Country} from './model';
@Injectable()
export class CountryService {

  constructor() { }
  getCountries(): Array<Country> {
    return [
      {Id: 1, Name: 'Canada'},
      {Id: 2, Name: 'USA'}
    ]
  }
}