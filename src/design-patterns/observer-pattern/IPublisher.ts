import ISubscriber from "./ISubscriber";

interface IPublisher<T> {
	subscribe(subscriber: ISubscriber<T>): void;
	unsubscribe(subscriber: ISubscriber<T>): void;
	notifySubscribers(data: T): void;
}

export default IPublisher;
