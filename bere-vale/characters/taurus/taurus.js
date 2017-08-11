const bere = (map, x, y) => {

  var character = hero(map, x, y);
  character.name('bere');
  character.voice('Mei-Jia');
  character.say();

  return Object.assign({}, character,{

    /*width: () => state.width,
    height: () => state.height,
    x: () => state.x,
    y: () => state.y,
    image: Loader.getImage('hero'),*/
  });
};

bere.image = 'characters/taurus/bere.png';
