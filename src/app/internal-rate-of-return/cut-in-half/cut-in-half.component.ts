import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cut-in-half',
  templateUrl: './cut-in-half.component.html',
  styles: []
})
export class CutInHalfComponent implements OnInit {

  values: FormGroup = new FormGroup({
    discountRateFirst: new FormControl('', [Validators.required, Validators.min(0.00000001)]),
    discountRateSecond: new FormControl('', [Validators.required, Validators.min(0.00000001)]),
    NPVFirst: new FormControl('', [Validators.required]),
    NPVSecond: new FormControl('', [Validators.required])
  });

  discountRateFirst;
  discountRateSecond;
  NPVFirst;
  NPVSecond;

  showErrorNotification = false;

  result;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(): void {
    const result = this.discountRateFirst +
      ((this.NPVFirst / (this.NPVFirst - this.NPVSecond)) * (this.discountRateSecond - this.discountRateFirst));
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
