// por definicion factory retorna un metodo // factory son acciones  // object assign crea un objeto

const comedor = function ()
{
    return {
        comer : function()
        {
            console.log("estoy comiendo");
        }
    };
};

const ladrador = function (name)
{
    return {
        name: name,
        ladrar: function()
        {
            console.log("Guau! soy " + this.name);
        }
    }
};

const maullador = function (name)
{
    return {
        name: name,
        maullar: function()
        {
            console.log("Miau! soy " + this.name);
        }
    }
};

const makePerrito = function(name)
{
    return Object.assign(
        {},
        ladrador(name),
        comedor()
    );
};

const makeGatito = function(name)
{
    return Object.assign(
        {},
        maullador(name),
        comedor()
    );
}

const makeCatDog = function(name)
{
    // return Object.assign(
    //     {},
    //     maullador(name),
    //     ladrador(name),
    //     comedor()
    // );
    return Object.assign(
        {},
        makePerrito(name),
        makeGatito(name)
    )
}

var boby = makePerrito("boby");
boby.ladrar();
boby.comer();

console.log("\n");

var kitty = makeGatito("kitty");
kitty.maullar();
kitty.comer();

console.log("\n");

var catdog = makeCatDog("catdog");
catdog.maullar();
catdog.ladrar();
catdog.comer();

