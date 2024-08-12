import IEnemy from "../../interfaces/IEnemy";

class Goblin implements IEnemy {
	attack(): void {
		console.log("Goblin enemy attacks...");
	}
}

export default Goblin;
