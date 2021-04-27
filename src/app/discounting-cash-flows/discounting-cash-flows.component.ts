import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-discounting-cash-flows',
  templateUrl: './discounting-cash-flows.component.html'
})
export class DiscountingCashFlowsComponent implements OnInit {

  values: FormGroup = new FormGroup({
    discountRate: new FormControl('', [Validators.required, Validators.min(0.00000001)]),
    calculationStep: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  discountRate;
  calculationStep;

  showErrorNotification = false;

  result;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(): void {
    const result = this.round(1 / Math.pow((1 + this.discountRate), this.calculationStep));
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
