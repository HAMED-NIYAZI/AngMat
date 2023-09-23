import { Injectable } from '@angular/core';
import { color } from '../model/color';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteServiceService {

  constructor() { }
  GetColorList(): color[] {

    return [
      { code: '1001', name: 'Red' },
      { code: '1002', name: 'Green' },
      { code: '1003', name: 'Blue' },
      { code: '1004', name: 'Yellow' },
      { code: '1005', name: 'Black' },
    ]
  }
}
