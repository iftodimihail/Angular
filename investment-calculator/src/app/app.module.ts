import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { NgModule } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
