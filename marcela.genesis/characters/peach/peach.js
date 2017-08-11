const Personaje = (map, x,y) => {
    var peach = hero(map,x,y)
    peach.say()
    peach.name("peach");
    return Object.assign({}, peach)
};
Personaje.image = "characters/peach/peach.png"



console.log(Personaje)