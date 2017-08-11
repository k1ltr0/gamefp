const ghost = (map, x, y) => {

    var heroJunior = hero(map, x, y);
    heroJunior.name('un fantasmita')

    return Object.assign({},heroJunior);
}

ghost.image = 'characters/vane/gatito.png';
