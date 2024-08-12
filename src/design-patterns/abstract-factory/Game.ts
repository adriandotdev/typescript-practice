import AbstractFactory from "./interfaces/AbstractFactory";

class Game {
	private factory: AbstractFactory;

	constructor(factory: AbstractFactory) {
		this.factory = factory;
	}

	public createCharacter(): void {
		const character = this.factory.createEnemy();
		const item = this.factory.createItem();

		console.log("Character");
		console.log(character);
		console.log("Item");
		console.log(`Item Name: ${item.getName()}\nRarity: ${item.getRarity()}`);
	}
}

export default Game;
