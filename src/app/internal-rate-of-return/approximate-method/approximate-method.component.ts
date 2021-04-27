import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-approximate-method',
  templateUrl: './approximate-method.component.html',
  styles: []
})
export class ApproximateMethodComponent implements OnInit {

  values: FormGroup = new FormGroup({
    discountRate: new FormControl('', [Validators.required, Validators.min(0.00000001)]),
    calculationStep: new FormControl('', [Validators.required, Validators.min(0)]),
    investedCapital: new FormControl('', [Validators.required, Validators.min(0)]),
    netProfit: new FormControl('', [Validators.required, Validators.min(0)]),
    accuracy: new FormControl('', [Validators.required, Validators.min(0)])
  });

  discountRate;
  calculationStep;
  investedCapital;
  netProfit;
  accuracy;

  showErrorNotification = false;

  result;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(discountRate): void {
    const previousDiscountRate = discountRate;
    discountRate = (this.netProfit / this.investedCapital) * (1 - (1 / Math.pow((1 + discountRate), this.calculationStep)));
    if (Math.abs(discountRate - previousDiscountRate) <= this.accuracy) {
      const result = this.round(discountRate);
      if (this.isNormalValue(result)) {
        this.result = this.round(result);
        this.showErrorNotification = false;
      } else {
        this.showErrorNotification = true;
      }
    } else {
      if (this.isNormalValue(discountRate)) {
        this.calculate(discountRate);
        this.showErrorNotification = false;
      } else {
        this.showErrorNotification = true;
        return;
      }
    }
  }

  isNormalValue(value): boolean {
    return !(value === Infinity || value === null || value === undefined || isNaN(value));
  }


  round(value: number): number {
    return +value.toFixed(9);
  }
}
