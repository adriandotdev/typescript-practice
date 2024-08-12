import IPayment from "../interfaces/IPayment";

abstract class PaymentCreator {
	abstract createPayment(): IPayment;
}

export default PaymentCreator;
