import * as THREE from 'three';
import { highlightMesh } from './Grid.js';
import { ref } from 'vue';

const mousePosition = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let intersects;

export let objects = [];

export class selectorClass
{
    selectedUnit = null;
}

export let gridUnit = ref();

// TODO The raycaster's positioning in a bit off due the custom canvas size; needs fixed.

export function raycasterHandler(e, scene, camera)
{
    mousePosition.x = (e.clientX / (window.innerWidth)) * 2 - 1;
    mousePosition.y = -(e.clientY / (window.innerHeight)) * 2 + 1;
    raycaster.setFromCamera(mousePosition, camera)
    intersects = raycaster.intersectObjects(scene.children);

    intersects.forEach(function (intersect)
    {
        if (intersect.object.name === 'ground')
        {
            const highlightPos = new THREE.Vector3().copy(intersect.point).floor().addScalar(0.5);
            highlightMesh.position.set(highlightPos.x, 0, highlightPos.z);

            const objectExist = objects.find(function (object)
            {
                return (object.position.x === highlightMesh.position.x) &
                    (object.position.z === highlightMesh.position.z)
            })

            if (!objectExist)
            {
                highlightMesh.material.color.setHex(0x00FF00);
            } else
            {
                highlightMesh.material.color.setHex(0xFF0000);
            }
        }
    });

}

export function mountRaycaster(paused, raycasterRef)
{

    if (paused == false)
    {
        window.addEventListener('mousemove', raycasterRef);
        console.log("Raycaster mounted from Raycaster.js");
    } else
    {
        window.removeEventListener('mousemove', raycasterRef);
        console.log("Raycaster removed from Raycaster.js");
    }
}

export function selectorHandler(scene)
{
    const objectExist = objects.find(function (object)
    {
        return (object.position.x === highlightMesh.position.x) &
            (object.position.z === highlightMesh.position.z)
    });

    if (!objectExist)
    {
        intersects.forEach(function (intersect)
        {
            if (intersect.object.name === 'ground')
            {
                const meshClone = selectorClass.selectedUnit.clone();
                // console.log(meshClone);
                meshClone.position.copy(highlightMesh.position);
                scene.add(meshClone);
                objects.push(meshClone);
                highlightMesh.material.color.setHex(0xFF0000);
            }
        });
    } else
    {
        console.log(objectExist.userData);
        gridUnit.value = objectExist;
        console.log(gridUnit.value);
    }

}

export function mountSelector(paused, selectorRef)
{
    if (paused == false)
    {
        window.addEventListener('mousedown', selectorRef);
        console.log("Selector mounted from Raycaster.js");
    } else
    {
        window.removeEventListener('mousedown', selectorRef);
        console.log("Selector removed from Raycaster.js");
    }
}

// export function mountSelector(scene)
// {
//     window.addEventListener('mousedown', function ()
//     {
//         const objectExist = objects.find(function (object)
//         {
//             return (object.position.x === highlightMesh.position.x) &
//                 (object.position.z === highlightMesh.position.z)
//         });

//         if (!objectExist)
//         {
//             intersects.forEach(function (intersect)
//             {
//                 if (intersect.object.name === 'ground')
//                 {
//                     const meshClone = selectorClass.selectedUnit.clone();
//                     // console.log(meshClone);
//                     meshClone.position.copy(highlightMesh.position);
//                     scene.add(meshClone);
//                     objects.push(meshClone);
//                     highlightMesh.material.color.setHex(0xFF0000);
//                 }
//             });
//         } else
//         {
//             console.log(objectExist.userData);
//             gridUnit.value = objectExist;
//             console.log(gridUnit.value)
//         }
//     })
// }