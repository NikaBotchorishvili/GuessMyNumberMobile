export const generateRandomBetween = (
	min: number,
	max: number,
	exclude: number[]
): number => {
	if (min > max) {
		throw new Error("Min should be less than or equal to Max");
	}

	let rndNum: number;

	do {
		rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
	} while (exclude.includes(rndNum));

	return rndNum;
};
