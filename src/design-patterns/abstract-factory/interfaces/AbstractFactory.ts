import IEnemy from "./IEnemy";
import IItem from "./IItem";

interface AbstractFactory {
	createEnemy(): IEnemy;
	createItem(): IItem;
}

export default AbstractFactory;
