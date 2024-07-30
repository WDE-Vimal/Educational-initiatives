import { PaymentStrategy } from './paymentStrategy';

export class BitcoinPayment implements PaymentStrategy {
  public pay(amount: number) {
    console.log(`Paid ${amount} using Bitcoin`);
  }
}
