import PaymentCreator from "../../abstract-class/PaymentCreator";
import IPayment from "../../interfaces/IPayment";
import GCashPayment from "../payment/GCashPayment";

class GCashPaymentCreator extends PaymentCreator {
	createPayment(): IPayment {
		return new GCashPayment();
	}
}

export default GCashPaymentCreator;
