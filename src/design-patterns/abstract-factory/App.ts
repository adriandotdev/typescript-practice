import DesertFactory from "./concrete-classes/factory/DesertFactory";
import ForestFactory from "./concrete-classes/factory/ForestFactory";
import Game from "./Game";

let game = null;
let type: string = "forest";

switch (type) {
	case "forest":
		game = new Game(new ForestFactory());
		break;
	case "desert":
		game = new Game(new DesertFactory());
		break;
	default:
		throw new Error("Invalid game type");
}

game.createCharacter();
