import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {DiscountingCashFlowsComponent} from './discounting-cash-flows/discounting-cash-flows.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {NetPresentValueComponent} from './net-present-value/net-present-value.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {DifferenceInflowOutflowComponent} from './net-present-value/difference-inflow-outflow/difference-inflow-outflow.component';
import {OneTimeInvestmentComponent} from './net-present-value/one-time-investment/one-time-investment.component';
import {SameInflowComponent} from './net-present-value/same-inflow/same-inflow.component';
import {DiscountedPaybackPeriodComponent} from './discounted-payback-period/discounted-payback-period.component';
import {InternalRateOfReturnComponent} from './internal-rate-of-return/internal-rate-of-return.component';
import {ApproximateMethodComponent} from './internal-rate-of-return/approximate-method/approximate-method.component';
import {CutInHalfComponent} from './internal-rate-of-return/cut-in-half/cut-in-half.component';
import {ProfitabilityIndexComponent} from './profitability-index/profitability-index.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    DiscountingCashFlowsComponent,
    NetPresentValueComponent,
    DifferenceInflowOutflowComponent,
    OneTimeInvestmentComponent,
    SameInflowComponent,
    DiscountedPaybackPeriodComponent,
    InternalRateOfReturnComponent,
    ApproximateMethodComponent,
    CutInHalfComponent,
    ProfitabilityIndexComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatExpansionModule,
    FormsModule,
    MatRadioModule,
  ],
  providers: [NgModel],
  bootstrap: [AppComponent]
})
export class AppModule {
}
