'use strict';


window.addEventListener('load', function () {

  var game = new Game([
    new ExampleMap1(),
    new ExampleMap2(),
    new ExampleMap3(),
    new ExampleMap4(),
    new ExampleMap5()
  ], [
    //KnightHero
    //Hero,
    //knight,
    horseman,
    //pixgeta
    //hero
  ]);

  game.appendTo(document.body);
  game.run();

});
