export const headingContainer = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15, // time between each word
		},
	},
};

export const headingWord = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const textContainer = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const heroAdditionalImage = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

export const propertiesContainer = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.3, // delay between children
		},
	},
};

export const propertyBlock = {
	hidden: { opacity: 0, y: 60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};
