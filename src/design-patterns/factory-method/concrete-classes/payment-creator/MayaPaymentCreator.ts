import PaymentCreator from "../../abstract-class/PaymentCreator";
import IPayment from "../../interfaces/IPayment";
import MayaPayment from "../payment/MayaPayment";

class MayaPaymentCreator extends PaymentCreator {
	createPayment(): IPayment {
		return new MayaPayment();
	}
}

export default MayaPaymentCreator;
