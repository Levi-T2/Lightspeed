import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const playerPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 4),
    new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        visible: false
    })
)
playerPlane.rotateX(-Math.PI / 2);
playerPlane.name = 'player';

export const playerGridOne = new THREE.GridHelper(2, 2);

export const playerGridTwo = new THREE.GridHelper(2, 2);


const geometries = [];

const body = new THREE.CylinderGeometry(.5, .4, 1.75, 3);
body.rotateX(1.5);

const nose = new THREE.ConeGeometry(.4, 1, 3);
nose.translate(0, 1.375, 0.002)
nose.rotateX(1.6375);
nose.rotateY(3.145);

const tail = new THREE.ConeGeometry(.5, 1.25, 3);
tail.rotateX(1.5)
tail.translate(0, .1075, 1.497)


const engineBody = new THREE.CylinderGeometry(.325, .225, 1, 5);

const engineNose = new THREE.ConeGeometry(.225, .675, 5);
engineNose.rotateX(3.145);
engineNose.rotateY(-.6225);
engineNose.translate(0, -.8375, 0);

const engineTail = new THREE.ConeGeometry(.324, .35, 5);
engineTail.translate(0, .675, 0)

const engineBody2 = engineBody.clone();
const engineNose2 = engineNose.clone();
const engineTail2 = engineTail.clone();

// NOTE This puts all engine mesh's into one object so it can be moved at once.
const engineOne = [engineBody, engineNose, engineTail];
for (let i = 0; i < engineOne.length; i++)
{
    engineOne[i].rotateX(1.61);
    engineOne[i].translate(.67, .3, .7625);
}
// Creates another engine comp to manipulate.
const engineTwo = [engineBody2, engineNose2, engineTail2]
for (let i = 0; i < engineTwo.length; i++)
{
    engineTwo[i].rotateX(1.61);
    engineTwo[i].translate(-.67, .3, .7625);
}

const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xff0080 })

geometries[0] = body;
geometries[1] = nose;
geometries[2] = tail;
geometries[3] = engineBody;
geometries[4] = engineNose;
geometries[5] = engineTail;
geometries[6] = engineBody2;
geometries[7] = engineNose2;
geometries[8] = engineTail2;

const geometry = BufferGeometryUtils.mergeGeometries(geometries);

export const playerUnit = new THREE.Mesh(geometry, material);
