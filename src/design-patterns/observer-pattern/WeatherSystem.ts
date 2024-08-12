import IPublisher from "./IPublisher";
import ISubscriber from "./ISubscriber";

class WeatherSystem<T> implements IPublisher<T> {
	private subscribers: ISubscriber<T>[] = [];

	subscribe(subscriber: ISubscriber<T>): void {
		this.subscribers.push(subscriber);
	}
	unsubscribe(subscriber: ISubscriber<T>): void {
		this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
	}
	notifySubscribers(data: T): void {
		this.subscribers.forEach((sub) => sub.update(data));
	}
}

export default WeatherSystem;
