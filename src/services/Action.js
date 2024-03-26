import * as THREE from 'three';
import { playerUnit } from './PlayerGrid';
import { addToScene, scene } from '@/threeJsMain';

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

    const totalDistance = distance(startPoint, endPoint);

    const direction = {
        x: (endPoint.x - startPoint.x) / totalDistance,
        y: (endPoint.y - startPoint.y) / totalDistance,
        z: (endPoint.z - startPoint.z) / totalDistance
    };

    let stepSize = 0.1;
    let delay = 5;
    let remainingDistance = totalDistance;

    let proj = projectileMesh.clone();
    addToScene(proj);
    proj.position.set(startPoint.x, startPoint.y, startPoint.z);

    function moveProjectile()
    {
        if (remainingDistance > stepSize)
        {
            proj.position.x += direction.x * stepSize;
            proj.position.y += direction.y * stepSize;
            proj.position.z += direction.z * stepSize;

            console.log(proj.position);

            remainingDistance -= stepSize;
            setTimeout(moveProjectile, delay);
        } else
        {
            scene.remove(proj);
            proj.geometry.dispose();
            proj.material.dispose();

            console.log("Done");
        }
    }

    moveProjectile();
}


function distance(point1, point2)
{
    return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) +
        Math.pow(point2.y - point1.y, 2) +
        Math.pow(point2.z - point1.z, 2)
    );
}




