'use strict';


window.addEventListener('load', function () {

  var game = new Game([
    new ExampleMap1(),
    new ExampleMap2()
  ], [
    //KnightHero
    //Hero,
    //knight
    //ghost
    skull
    //hero
  ]);

  game.appendTo(document.body);
  game.run();

});
