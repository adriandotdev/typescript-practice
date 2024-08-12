import ISubscriber from "./ISubscriber";

class Phone<T> implements ISubscriber<T> {
	static objectNo: number = 1;
	private objectID: number;

	constructor() {
		this.objectID = Phone.objectNo++;
	}

	update(data: T): void {
		console.log(`Phone ID: ${this.objectID}`);
		console.log(data);
	}
}

export default Phone;
