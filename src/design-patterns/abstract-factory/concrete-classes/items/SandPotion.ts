import IItem, { RARITY } from "../../interfaces/IItem";

class SandPotion implements IItem {
	name: string;
	rarity: RARITY;

	constructor(name: string, rarity: RARITY) {
		this.name = name;
		this.rarity = rarity;
	}

	getName(): string {
		return this.name;
	}

	getRarity(): RARITY {
		return this.rarity;
	}
}

export default SandPotion;
