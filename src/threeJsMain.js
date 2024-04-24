import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { planeMesh, grid, highlightMesh } from './services/Grid.js'
import { mountRaycaster, mountSelector, raycasterHandler, selectorHandler } from './services/Raycaster.js';
import { playerGridTwo, playerGridOne, playerPlane, playerUnit } from './services/PlayerGrid.js';

let canvas;
let render;
let camera;
let orbit;

export let raycasterRef;
export let selectorRef;


let paused = false;

export const scene = new THREE.Scene();

export const renderW = window.innerWidth / 1.25;
export const renderH = window.innerHeight / 1.25;


window.onload = function ()
{
    canvas = document.getElementById('mainCanvas')
    console.log(canvas)
    render = new THREE.WebGLRenderer({ canvas: canvas });
    render.setSize(renderW, renderH);
    // document.body.appendChild(render.canvas);

    camera = new THREE.PerspectiveCamera(45, renderW / renderH, 0.1, 1000);

    orbit = new OrbitControls(camera, render.domElement);

    camera.position.set(10, 15, -22);

    raycasterRef = (event) => raycasterHandler(event, scene, camera);
    selectorRef = () => selectorHandler(scene);

    mountRaycaster(paused, raycasterRef);
    mountSelector(paused, selectorRef);
    // NOTE This needs to be reworked to be more like the raycaster so it can too be removed.
    // mountSelector(scene); 

    orbit.update();
}

// const canvas = document.getElementById("mainCanvas")

// render = new THREE.WebGLRenderer({ canvas: canvas });
// render.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(render.canvas);

export function addToScene(mesh)
{
    scene.add(mesh);
}

scene.add(planeMesh);
scene.add(grid);
scene.add(highlightMesh);

scene.add(playerPlane);
playerPlane.position.set(-0.5, 1.25, 16);

scene.add(playerGridOne);
playerGridOne.position.set(-0.5, 1.25, 17);
scene.add(playerGridTwo);
playerGridTwo.position.set(-0.5, 1.25, 15);

scene.add(playerUnit);
playerUnit.position.set(-0.5, 2, 16);

export function animate()
{
    // projectiles.forEach(function (projectile)
    // {
    //     projectile.position.x = 20
    // })

    requestAnimationFrame(animate);
    render.render(scene, camera);
}