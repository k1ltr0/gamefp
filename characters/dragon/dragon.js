const dragon = (map, x, y) => hero(map, x, y);
dragon.image = 'characters/dragon/dragon.png';


/*
function DragonHero(map, x, y) {
  Hero.call(this, map, x, y);
}

DragonHero.prototype = Object.create(Hero.prototype);
DragonHero.prototype.constructor = DragonHero;

// image property MUST be defined in prototype
DragonHero.prototype.image = 'characters/dragon/dragon.png';
*/