import * as THREE from 'three';
import { playerUnit } from './PlayerGrid';

export const projectileMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 2, 2),
    new THREE.MeshBasicMaterial({
        wireframe: true,
        color: 0xFFEA00
    })
)

export function shootProjectile(objectPosition)
{
    const startPoint = playerUnit.position;
    const endPoint = objectPosition;

    console.log(startPoint);
    console.log(endPoint);

    const totalDistance = distance(startPoint, endPoint);

    const direction = {
        x: (endPoint.x - startPoint.x) / totalDistance,
        y: (endPoint.y - startPoint.y) / totalDistance,
        z: (endPoint.z - startPoint.z) / totalDistance
    };
}

function distance(point1, point2)
{
    return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) +
        Math.pow(point2.y - point1.y, 2) +
        Math.pow(point2.z - point1.z, 2)
    );
}

