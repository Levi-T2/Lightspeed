import * as THREE from 'three';
import { highlightMesh } from './Grid.js';

const mousePosition = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let intersects;

// TODO The raycaster's positioning in a bit off due the custom canvas size; needs fixed.

export function mountRaycaster(scene, camera)
{
    window.addEventListener('mousemove', function (e) 
    {
        mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
        mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mousePosition, camera)
        intersects = raycaster.intersectObjects(scene.children);
        intersects.forEach(function (intersect)
        {
            if (intersect.object.name === 'ground')
            {
                const highlightPos = new THREE.Vector3().copy(intersect.point).floor().addScalar(0.5);
                highlightMesh.position.set(highlightPos.x, 0, highlightPos.z);
            }
        });
    })
    console.log("Raycaster mounted from Raycaster.js")
}