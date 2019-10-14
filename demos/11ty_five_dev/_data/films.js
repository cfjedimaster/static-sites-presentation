const fetch = require('node-fetch');

module.exports = async function() {
	let resp = await fetch('https://swapi.co/api/films/');
	let films = await resp.json();
	return films.results;
};