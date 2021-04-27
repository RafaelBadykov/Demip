import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profitability-index',
  templateUrl: './profitability-index.component.html',
  styles: []
})
export class ProfitabilityIndexComponent implements OnInit {
  /* Группа для алидация полей */
  values: FormGroup = new FormGroup({
    investedCapital: new FormControl('', [Validators.required, Validators.min(0.00000001)]),
    presentValue: new FormControl('', [Validators.required])
  });
  /* Переменный, которые привязаны к полям */
  investedCapital;
  presentValue;
  /* Переменная для отоброжения ошибки */
  showErrorNotification = false;
  /* Переменная для результата вычисления*/
  result;

  constructor() {
  }

  ngOnInit(): void {
  }
  /* Метод вычисления */
  calculate(): void {
    const result = this.presentValue / this.investedCapital;
    if (this.isNormalValue(result)) {
      this.result = this.round(result);
      this.showErrorNotification = false;
    } else {
      this.showErrorNotification = true;
    }
  }
  /* Метод проверки значения */
  isNormalValue(value): boolean {
    return !(value === Infinity || value === null || value === undefined || isNaN(value));
  }
  /* Метод округления  */
  round(value: number): number {
    return +value.toFixed(9);
  }
}
