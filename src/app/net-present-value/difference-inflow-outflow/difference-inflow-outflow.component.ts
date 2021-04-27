import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-difference-inflow-outflow',
  templateUrl: './difference-inflow-outflow.component.html',
  styles: []
})
export class DifferenceInflowOutflowComponent implements OnInit {

  values: FormGroup = new FormGroup({
    discountRate: new FormControl('', [Validators.required, Validators.min(0.00000001)]),
    calculationStep: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  discountRate;
  calculationStep;
  arrayLength;
  differenceArray: number[] = new Array(0);

  showErrorNotification = false;

  result;
  constructor() {
  }

  ngOnInit(): void {
  }

  next(): void {
    this.values.addControl('numberControl', new FormControl('', [Validators.required]));
    this.arrayLength = Array(this.calculationStep).fill(0).map((x, i) => i);
    this.differenceArray = new Array(this.calculationStep);
  }

  calculate(): void {
    let result = 0;
    for (let i = 1; i <= this.calculationStep; i++) {
      result += this.differenceArray[i - 1] / Math.pow((1 + this.discountRate), i);
    }
    if (this.isNormalValue(result)) {
      this.result = this.round(result);
      this.showErrorNotification = false;
    } else {
      this.showErrorNotification = true;
    }
  }

  isNormalValue(value): boolean {
    return !(value === Infinity || value === null || value === undefined || isNaN(value));
  }

  round(value: number): number {
    return +value.toFixed(2);
  }
}
