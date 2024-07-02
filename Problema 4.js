let enemy1 = {
    nombre: "Enemy A",
    dist: 10,
    prioridad: 2
};

let enemy2 = {
    nombre: "Enemy B",
    dist: 20,
    prioridad: 3
};

function masImportante(x,y){
    return  x.prioridad > y.prioridad ? x.nombre
            : x.prioridad < y.prioridad ? y.nombre
            : masCerca(x,y);
}

function masCerca (x, y){
    return x.dist <= y.dist ? x.nombre : y.nombre;
}

console.log(masImportante(enemy1, enemy2));