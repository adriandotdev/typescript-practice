import IEnemy from "../../interfaces/IEnemy";

class Scorpion implements IEnemy {
	attack(): void {
		console.log("Scorpion attacks...");
	}
}

export default Scorpion;
