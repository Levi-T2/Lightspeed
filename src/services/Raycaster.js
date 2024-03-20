import * as THREE from 'three';
import { highlightMesh } from './Grid.js';
import { ref } from 'vue';

const mousePosition = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let intersects;

let objects = [];

export class selectorClass
{
    selectedUnit = null;
}

export let gridUnit = ref();

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

    })
    console.log("Raycaster mounted from Raycaster.js")
}

export function mountSelector(scene)
{
    window.addEventListener('mousedown', function ()
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
            gridUnit.value = objectExist.userData;
            console.log(gridUnit.value)
        }
    })
}