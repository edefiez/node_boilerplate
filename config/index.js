var config = {
	dev: {
		label: 'dev',
		port: 3000
	},
	test: {
		label: 'test',
		port: 4000
	},
	prod: {
		label: 'prod',
		port: 5000
	}
}
module.exports = function(mode) {
	return config[mode || process.argv[2] || 'dev'] || config.dev;
}
