import { PaymentStrategy } from './paymentStrategy';

export class PayPalPayment implements PaymentStrategy {
  public pay(amount: number) {
    console.log(`Paid ${amount} using PayPal`);
  }
}
