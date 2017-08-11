//const archer = (map, x, y) => hero(map, x, y);
//archer.image = 'characters/archer/archer.png';

const archer = (map, x, y) => {
	var heroe = hero(map, x, y);
	heroe.name("paula");
	heroe.say();
	heroe.voice("Helena");

	return Object.assign({}, heroe);
}

archer.image = 'characters/archer/archer.png';

/*
var pet = function (patas){
	return {
		caminar: function(){
			mover(patas)
		}
	}
}
var perrito = function(){
	const patas = 4;
	return Object.assign({}, pet(), {
		ladrar: function(){}
	})
}
*/