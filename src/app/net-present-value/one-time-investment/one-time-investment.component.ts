import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-one-time-investment',
  templateUrl: './one-time-investment.component.html',
  styles: ['.example-h2 { margin: 10px;} .example-section { align-content: center;  align-items: center; height: 60px; } .example-margin { margin: 0 10px; }']
})
export class OneTimeInvestmentComponent implements OnInit {
  /* Валидатор */
  values: FormGroup = new FormGroup({
    discountRate: new FormControl('', [Validators.required, Validators.min(0.00000001)]),
    calculationStep: new FormControl('', [Validators.required, Validators.min(0)]),
    investedCapital: new FormControl('', [Validators.required, Validators.min(0)])
  });
  /* Переменная для смены режима вычисления */
  isConst = false;
  /* Переменные для вычисления */
  discountRate;
  calculationStep;
  investedCapital;

  arrayLength;
  netProfitArray: number[] = new Array(0);

  showErrorNotification = false;

  result;


  constructor() {
  }

  ngOnInit(): void {
  }

  changeMod(bool): void {
    this.isConst = bool;
  }

  next(): void {
    /* Проверка режима вычисления*/
    if (this.isConst) { /* Если каждый год один и тот же доход */
      this.values.addControl('numberControl', new FormControl('', [Validators.required]));
      this.arrayLength = Array(1).fill(0).map((x, i) => i);
      this.netProfitArray = new Array(1);
    } else { /* Если доход разный */
      this.values.addControl('numberControl', new FormControl('', [Validators.required]));
      this.arrayLength = Array(this.calculationStep).fill(0).map((x, i) => i);
      this.netProfitArray = new Array(this.calculationStep);
    }
  }

  calculate(): void {
    let result = 0;
    if (this.isConst) { /* Если доход одинаковый */
      for (let i = 1; i <= this.calculationStep; i++) {
        console.log(i);
        result += (this.netProfitArray[0] / (Math.pow((1 + this.discountRate), i)));
      }
      result -= this.investedCapital;
    } else { /* Если разный */
      for (let i = 1; i <= this.calculationStep; i++) {
        result += (this.netProfitArray[i - 1] / (Math.pow((1 + this.discountRate), i)));
      }
      result -= this.investedCapital;
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
