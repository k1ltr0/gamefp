const haunter = (map, x, y) => {
  var character = hero(map, x, y);
  character.name('haunter');
  character.voice('Milena');
  character.say();

  return Object.assign({}, character,{
    /*width: () => state.width,
    height: () => state.height,
    x: () => state.x,
    y: () => state.y,
    image: Loader.getImage('hero'),*/
  });
};


haunter.image = 'characters/haunter/haunter.png';
