const archer = (map, x, y) => {
    var heroe = hero(map, x, y);
    heroe.name("paula");
    heroe.say();
    heroe.voice("Helena");
    return Object.assign({}, heroe);
}
archer.image = 'characters/paula/paula.png';