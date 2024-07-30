Behavioural pattern:

Observer Pattern:
*****************

The `WeatherStation` acts as the subject, which holds a list of observers (display units).
When the temperature changes, `WeatherStation` notifies all registered observers.
`TemperatureDisplay` and `Fan` are concrete observers that react to temperature updates.

Strategy Pattern:
*****************

The `PaymentContext` acts as the context, which holds a reference to a `PaymentStrategy`.
Different payment methods like `CreditCardPayment`, `PayPalPayment`, and `BitcoinPayment` implement the `PaymentStrategy` interface.
The payment method can be changed at runtime by setting a different strategy in the `PaymentContext`.

_____________________________________________________________________________________________________________________________
Creational Pattern:

Factory Method Pattern:
***********************

Purpose: Defines an interface for creating objects, but allows subclasses to alter the type of objects that will be created.

Benefits: Promotes loose coupling and can be easily extended with new product types without modifying existing code.


Singleton Pattern:
*****************

Purpose: Ensures a class has only one instance and provides a global point of access to it.

Benefits: Ensures consistency and control over resources, such as configuration settings or database connections.


_____________________________________________________________________________________________________________________________
structural pattern:

Adapter Pattern:
****************

Purpose: Converts one interface into another expected by the client. It allows incompatible interfaces to work together.

Example: The `Adapter` class in the example allows the `LegacySystem` to be used with the `NewSystem` interface without modifying the `NewSystem` class.


Decorator Pattern:
******************

Purpose: Adds new behavior to objects dynamically without altering their structure. It provides a flexible alternative to subclassing for extending functionality.

Example: The `LoggingDecorator` and `AuthDecorator` classes add logging and authentication behavior to the `SimpleComponent`, respectively, without modifying its code.