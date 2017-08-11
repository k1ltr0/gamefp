const arturo = (map, x, y) => {
	
	var arturo = hero(map, x, y);
		arturo.name('Arturo');
		arturo.voice("Bruce");
		arturo.say();

	
	return Object.assign({}, arturo);
}
arturo.image = 'characters/arturo/arturo.png';