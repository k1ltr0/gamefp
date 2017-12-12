'use strict';


function ExampleMap1() {

  Map.call(this, {
    cols: 12,
    rows: 12,
    tsize: 64,
    layers: [[
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 3,
      3, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 3,
      3, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 3,
      3, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3,
      3, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 3,
      3, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 3,
      3, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3
    ], [
      4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 5, 0, 0, 0, 0, 5, 0, 0, 4,
      4, 0, 5, 0, 5, 0, 0, 5, 0, 5, 0, 4,
      4, 0, 0, 5, 0, 0, 0, 0, 5, 0, 0, 4,
      4, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 4, 5, 5, 4, 0, 0, 0, 4,
      4, 0, 0, 0, 4, 5, 7, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 4,
      4, 4, 4, 4, 0, 6, 4, 4, 4, 4, 4, 4,
    ]]
  });
}


ExampleMap1.prototype = Object.create(Map.prototype);


ExampleMap1.prototype.constructor = ExampleMap1;


window.ExampleMap1 = ExampleMap1;
