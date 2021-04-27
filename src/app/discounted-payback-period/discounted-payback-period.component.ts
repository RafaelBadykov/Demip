import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-discounted-payback-period',
  templateUrl: './discounted-payback-period.component.html',
  styles: []
})
export class DiscountedPaybackPeriodComponent implements OnInit {
  values: FormGroup = new FormGroup({
    discountRate: new FormControl('', [Validators.required, Validators.min(0.00000001)]),
    investedCapital: new FormControl('', [Validators.required, Validators.min(0)]),
    netProfit: new FormControl('', [Validators.required])
  });

  discountRate;
  investedCapital;
  netProfit;

  showErrorNotification = false;

  result;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(): void {
    this.showErrorNotification = false;
    const result = this.round((-1) *
      ((Math.log(1 - this.discountRate * (this.investedCapital / this.netProfit)))
        / (Math.log(1 + this.discountRate))));

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
    return +value.toFixed(9);
  }
}
