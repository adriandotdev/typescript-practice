import AbstractFactory from "../../interfaces/AbstractFactory";
import IEnemy from "../../interfaces/IEnemy";
import IItem, { RARITY } from "../../interfaces/IItem";
import Goblin from "../enemies/Goblin";
import HealthPotion from "../items/HealthPotion";

class ForestFactory implements AbstractFactory {
	createEnemy(): IEnemy {
		return new Goblin();
	}

	createItem(): IItem {
		return new HealthPotion("Makiling", RARITY.LEGENDARY);
	}
}

export default ForestFactory;
