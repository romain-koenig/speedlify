module.exports = {
	name: "Sites clients", // optional, falls back to object key
	description: "Sites de nos clients",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://www.agence-environnement-sante.fr/",
		"https://cotiere-transition.fr/",
	]
};
