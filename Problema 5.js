let enemy1 = {
    nombre: "Enemy A",
    dist: 30,
    prioridad: 2,
    speed: 10
};

let enemy2 = {
    nombre: "Enemy B",
    dist: 30,
    prioridad: 2,
    speed: 20
};

function masImportante(x,y){
    return  x.prioridad > y.prioridad ? x.nombre
            : x.prioridad < y.prioridad ? y.nombre
            : masCerca(x,y);
}

function masCerca (x, y){
    return  x.dist > y.dist ? y.nombre
            : x.dist < y.dist ? x.nombre
            : masVeloz(x,y);
}

function masVeloz(x,y){
    return x.speed >= y.speed ? x.nombre : y.nombre;
}

console.log(masImportante(enemy1, enemy2));