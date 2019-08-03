const pixgeta = (map, x, y) => {
	var xgeta = hero(map,x,y)	
	xgeta.name("Pixegeta");
	xgeta.voice();
	xgeta.say();
	return Object.assign({}, xgeta)
};
pixgeta.image = 'characters/pixgeta/pixgeta.png';