module.exports = function registerEndpoint(router, {exceptions, database }) {
	const { ServiceUnavailableException } = exceptions;

	router.get('/', (req, res) => {
		var code = 1236;
		database.raw('SELECT nom FROM compagnie WHERE code ='+code)
			.then((results) => res.json(results))
			.catch((error) => {
				throw new ServiceUnavailableException(error.message);
			});
	});
};
