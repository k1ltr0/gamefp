const pusheen = (map, x, y) => {
	var personaje = hero(map, x, y);
	personaje.name("nada");
	personaje.voice("Google italiano");
	personaje.say();
	return Object.assign({}, personaje,{
	});
};
pusheen.image = 'characters/pusheen/pusheen.png';