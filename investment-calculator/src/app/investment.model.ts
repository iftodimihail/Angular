export interface IInvestmentData {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface IInvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
