import Laptop from "./Laptop";
import Phone from "./Phone";
import WeatherSystem from "./WeatherSystem";

const weatherSystem: WeatherSystem<Object> = new WeatherSystem();

// Subscribers
const phone1: Phone<Object> = new Phone();
const phone2: Phone<Object> = new Phone();
const laptop1: Laptop<Object> = new Laptop();
const laptop2: Laptop<Object> = new Laptop();

weatherSystem.subscribe(phone1);
weatherSystem.subscribe(phone2);
weatherSystem.subscribe(laptop1);
weatherSystem.subscribe(laptop2);

weatherSystem.notifySubscribers({ feelsLike: 25, weather: "Sunny" });

weatherSystem.unsubscribe(phone1);

console.log("================================================");
weatherSystem.notifySubscribers({ feelsLike: 25, weather: "Sunny" });
