const horseman = (map, x, y) => {
	var ned = hero(map,x,y)	
	ned.name("Ned Stark");
	ned.voice();
	ned.say();
	return Object.assign({}, ned)
};

horseman.image = 'characters/horseman/horseman.png';