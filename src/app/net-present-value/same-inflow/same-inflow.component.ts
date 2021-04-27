import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-same-inflow',
  templateUrl: './same-inflow.component.html',
  styles: []
})
export class SameInflowComponent implements OnInit {
  /* Валидатор */
  values: FormGroup = new FormGroup({
    discountRate: new FormControl('', [Validators.required, Validators.min(0.00000001)]),
    calculationStep: new FormControl('', [Validators.required, Validators.min(0)]),
    investedCapital: new FormControl('', [Validators.required, Validators.min(0)]),
    presentValue: new FormControl('', [Validators.required])
  });
  /* Переменные */
  discountRate;
  calculationStep;
  investedCapital;
  presentValue;

  showErrorNotification = false;

  result;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(): void {
    const result = (this.presentValue * (1 / this.discountRate) *
      (1 - (1 / Math.pow(1 + this.discountRate, this.calculationStep)))) - this.investedCapital;

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
