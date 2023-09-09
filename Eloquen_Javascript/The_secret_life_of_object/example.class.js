//C1: create an object not using prototype
let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

const killerRabbit = makeRabbit('killer');
killerRabbit.speak('hehe');

//C2 create object using prototype
function Rabbit(type){
    this.type = type;
}

Rabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
}

const rabbitWithPrototype = new Rabbit('Liver');
rabbitWithPrototype.speak('hello');


//=====> two ways are the same but we should use the second, it's more clearly

const copyRabbit = new rabbitWithPrototype.constructor('copy');
copyRabbit.speak('hehe');