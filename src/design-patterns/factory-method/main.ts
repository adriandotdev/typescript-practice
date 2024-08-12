import GCashPaymentCreator from "./concrete-classes/payment-creator/GCashPaymentCreator";
import MayaPaymentCreator from "./concrete-classes/payment-creator/MayaPaymentCreator";
import IPayment from "./interfaces/IPayment";

let paymentCreator = null;
const paymentType: string = "maya";

if (paymentType === "maya") {
	paymentCreator = new MayaPaymentCreator();
} else if (paymentType === "gcash") {
	paymentCreator = new GCashPaymentCreator();
}

if (!paymentCreator) {
	throw new Error("Invalid payment type");
}

const payment: IPayment = paymentCreator.createPayment();

console.log(payment.GetInterestRate());
