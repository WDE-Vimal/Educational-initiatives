import { PaymentStrategy } from './paymentStrategy';

export class CreditCardPayment implements PaymentStrategy {
  public pay(amount: number) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}
