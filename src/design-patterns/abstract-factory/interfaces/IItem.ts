export enum RARITY {
	COMMON,
	UNCOMMON,
	RARE,
	EPIC,
	LEGENDARY,
}

interface IItem {
	getName(): string;
	getRarity(): RARITY;
}

export default IItem;
