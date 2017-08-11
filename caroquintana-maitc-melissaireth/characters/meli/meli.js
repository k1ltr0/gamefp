const meli = (map,x,y) =>{
	var me = hero(map,x,y);
		me.name("un arcoiris");
		me.voice("Fiona");
		me.say();

	return Object.assign({}, me)	
}
meli.image = 'characters/meli/meli.png'; 