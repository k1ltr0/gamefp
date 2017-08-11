const someguy = (map, x, y) =>{
	
	var herosomeguy = hero(map, x, y);
	herosomeguy.name("someguy");
	herosomeguy.say();
	herosomeguy.voice("Google UK English Male");
	return Object.assign({}, herosomeguy, {
		
	});

}

someguy.image = "characters/someguy/someguy.gif";