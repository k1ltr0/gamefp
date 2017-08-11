const amala = (map, x, y) => {
	console.log(hero(map, x, y));

	var h = hero(map, x, y);
	h.say();
	h.name('Amala');
	h.voice('Alex');

	//h.image = Loader.getImage('characters/amala/amala.png');

	return Object.assign({},h);
};

amala.image = 'characters/amala/amala.png';