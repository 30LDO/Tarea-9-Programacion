let enemy1 = {
    nombre: "Enemy A",
    dist: 20
};

let enemy2 = {
    nombre: "Enemy B",
    dist: 20
};

function masCerca (x, y){
    return x.dist <= y.dist ? x.nombre : y.nombre;
}

console.log(masCerca(enemy1, enemy2));