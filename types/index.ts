export interface Block {
	id: NumberConstructor;
	name: String;
	displayName: string;
	hardness: number;
	resistance: number;
	stackSize: number;
	diggable: boolean;
	material: string;
	transparent: boolean;
	emitLight: number;
	filterLight: number;
	defaultState: number;
	minStateId: number;
	maxStateId: number;
	states: [
		{
			name: string;
			type: string;
			num_values: number;
			values?: Array<string>;
		}
	];
	harvestTools: {
		"737": boolean;
		"742": boolean;
		"747": boolean;
		"752": boolean;
		"757": boolean;
		"762": boolean;
	};
	drops: Array<number>;
	boundingBox: string;
}
