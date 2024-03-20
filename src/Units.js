import * as THREE from 'three';

export const Units = [
    {
        pyramid: new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 4, 2),
            new THREE.MeshBasicMaterial({
                wireframe: true,
                color: 0xFFEA00
            })
        )
    },
    {
        sphere: new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 4, 4),
            new THREE.MeshBasicMaterial({
                wireframe: true,
                color: 0xFFA500
            })
        )
    },
]

class UnitStats
{
    constructor(name, health, defense, attackPower)
    {
        this.name = name,
            this.health = health,
            this.defense = defense,
            this.attackPower = attackPower
    }
}

function appendMeshDetails(numberInArray, name, health, defense, attackPower)
{
    Object.values(Units[numberInArray])[0].userData = new UnitStats(name, health, defense, attackPower);
}

appendMeshDetails(0, 'Pyramid', 25, 5, 5);

appendMeshDetails(1, 'Sphere', 30, 3, 6);