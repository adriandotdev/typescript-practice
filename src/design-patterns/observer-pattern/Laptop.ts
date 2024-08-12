import ISubscriber from "./ISubscriber";

class Laptop<T> implements ISubscriber<T> {
	static objectNo: number = 1;
	private objectID: number;

	constructor() {
		this.objectID = Laptop.objectNo++;
	}

	update(data: T): void {
		console.log(`Laptop ID: ${this.objectID}`);
		console.log(data);
	}
}

export default Laptop;
