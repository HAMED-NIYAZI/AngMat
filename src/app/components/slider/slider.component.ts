import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  minvalue :NumberInput=0;
maxvalue :NumberInput=0;
sliderValue:number=0;
value:number=0;

ngOnInit(): void {
  this.minvalue =10;
  this.maxvalue =50;
  this.sliderValue=0;
}

}
