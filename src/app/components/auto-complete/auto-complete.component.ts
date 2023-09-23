import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { color } from 'src/app/model/color';
import { AutoCompleteServiceService } from 'src/app/services/auto-complete-service.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})



export class AutoCompleteComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  //filteredOptions!: string[];

colorArrayList!:color[];
filteredcolorArrayList!: Observable<color[]>;


constructor(private _autoCompleteServiceService:AutoCompleteServiceService){
  this.colorArrayList=_autoCompleteServiceService.GetColorList();
}


  ngOnInit() {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );

    this.filteredcolorArrayList = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter_filteredcolorArrayList(value || '')),
    );

    //this.filteredOptions= this._filter('');
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  
  private _filter_filteredcolorArrayList(value: string): color[] {
    const filterValue = value.toLowerCase();

    return this.colorArrayList.filter(option => option.name.toLowerCase().includes(filterValue)
    || option.code.toLowerCase().includes(filterValue));
  }
}