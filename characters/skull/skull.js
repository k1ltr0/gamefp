const skull = (map, x, y) => {

    var heroJunior = hero(map, x, y);
    heroJunior.name('un cuerpito esqueletico')

    return Object.assign({},heroJunior);
}

skull.image = 'characters/skull/skull.png';