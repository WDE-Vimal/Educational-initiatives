import { PaymentStrategy } from './paymentStrategy';

export class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  public executePayment(amount: number) {
    this.strategy.pay(amount);
  }
}
