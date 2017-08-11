const miau = (map, x, y) => {
	var heromiau = hero(map, x, y);
	heromiau.name("miau");
	heromiau.say();
	heromiau.voice("Microsoft Zira Desktop - English (United States)");
	return Object.assign({}, heromiau, {});
}

miau.image = "characters/miau/miau.png";
