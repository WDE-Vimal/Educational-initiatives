import { PaymentContext } from './paymentContext';
import { CreditCardPayment } from './creditCardPayment';
import { PayPalPayment } from './payPalPayment';
import { BitcoinPayment } from './bitcoinPayment';

const paymentContext = new PaymentContext(new CreditCardPayment());
paymentContext.executePayment(100);

paymentContext.setStrategy(new PayPalPayment());
paymentContext.executePayment(200);

paymentContext.setStrategy(new BitcoinPayment());
paymentContext.executePayment(300);
