module.exports = {
	name: "Sites clients", // optional, falls back to object key
	description: "Sites de nos clients",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"http://agence-environnement-sante.fr/",
		"http://cotiere-transition.fr/",
	]
};
