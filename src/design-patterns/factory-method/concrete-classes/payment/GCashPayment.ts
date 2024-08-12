import IPayment from "../../interfaces/IPayment";

class GCashPayment implements IPayment {
	GetInterestRate(): number {
		return 0.5;
	}
}

export default GCashPayment;
