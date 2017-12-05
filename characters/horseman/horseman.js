const horseman = (map, x, y) => {
	var ned = hero(map,x,y)
	ned.say()
	ned.name("Ned");
return Object.assign({}, ned)
};

horseman.image = 'characters/horseman/horseman.png';