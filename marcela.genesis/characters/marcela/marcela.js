var marcela = function(map, x, y) {

	var heroe = hero(map,x,y);
	heroe.name("marcela");
	heroe.voice("Diego");
	return Object.assign({}, heroe)

};
marcela.image = "characters/marcela/marcela.png";
