import AbstractFactory from "../../interfaces/AbstractFactory";
import IEnemy from "../../interfaces/IEnemy";
import IItem, { RARITY } from "../../interfaces/IItem";
import Scorpion from "../enemies/Scorpion";
import SandPotion from "../items/SandPotion";

class DesertFactory implements AbstractFactory {
	createEnemy(): IEnemy {
		return new Scorpion();
	}
	createItem(): IItem {
		return new SandPotion("Asukal", RARITY.UNCOMMON);
	}
}

export default DesertFactory;
