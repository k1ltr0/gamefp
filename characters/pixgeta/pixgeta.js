const pixgeta = (map, x, y) => {
	var xgeta = hero(map,x,y)
	xgeta.say()
	xgeta.name("Pixgeta");
return Object.assign({}, xgeta)
};
pixgeta.image = 'characters/pixgeta/pixgeta.png';