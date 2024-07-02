let enemy1 = {
    nombre: "",
    dist: 0
};

let enemy2 = {
    nombre: "",
    dist: 0
};

enemy1.nombre = prompt("Nombre del enemigo 1");
enemy1.dist = parseInt(prompt("Distancia del enemigo 1"));
enemy2.nombre = prompt("Nombre del enemigo 2");
enemy2.dist = parseInt(prompt("Distancia del enemigo 2"));

function masCerca (x, y){
    return x.dist <= y.dist ? x.nombre : y.nombre;
}

console.log(masCerca(enemy1, enemy2));