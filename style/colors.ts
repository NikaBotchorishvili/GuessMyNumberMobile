export type ColorTheme = {
	primary: string;
	primaryForeground: string,
	secondary: string;
	textSecondary: string;
	textPrimary: string;
};

const sharedColors = {
	black: "#000000",
	white: "#FFFFFF",
};

type SharedColors = typeof sharedColors;

type TColors = ColorTheme & SharedColors;

// type ColorPalettes = {
// 	light: TColors;
// 	dark: TColors;
// };

type ColorPalette = TColors;
const Colors: ColorPalette = {
	primary: "#0E172B",
	primaryForeground: "#14213D",
	secondary: "#FCA311",
	textPrimary: sharedColors.white,
	textSecondary: "#F2F2F2", // or this #E5E5E5
	...sharedColors,
};

export default Colors;
