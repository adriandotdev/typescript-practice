import IPayment from "../../interfaces/IPayment";

class MayaPayment implements IPayment {
	GetInterestRate(): number {
		return 0.25;
	}
}

export default MayaPayment;
