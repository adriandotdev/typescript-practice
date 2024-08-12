interface ISubscriber<T> {
	update(data: T): void;
}

export default ISubscriber;
