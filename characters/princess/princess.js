const princess = (map, x, y) => hero(map, x, y);
princess.image = 'characters/princess/princess.png';

/*
 function PrincessHero(map, x, y) {
  Hero.call(this, map, x, y);

  this.name = "una princesa";
  this.voice= "Microsoft Helena Desktop - Spanish (Spain)"
}

PrincessHero.prototype = Object.create(Hero.prototype);
PrincessHero.prototype.constructor = PrincessHero;

// image property MUST be defined in prototype
PrincessHero.prototype.image = 'characters/princess/princess.png';
PrincessHero.prototype.name = 'soy una princesa';
*/