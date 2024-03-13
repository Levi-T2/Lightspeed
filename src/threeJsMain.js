import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { planeMesh, grid } from './services/Grid.js'

let canvas;
let render;
let camera;
let orbit;

const scene = new THREE.Scene();

export const renderW = 960;
export const renderH = 720;

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

    orbit.update();
}

// const canvas = document.getElementById("mainCanvas")

// render = new THREE.WebGLRenderer({ canvas: canvas });
// render.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(render.canvas);


scene.add(planeMesh)
scene.add(grid)

export function animate()
{
    requestAnimationFrame(animate);
    render.render(scene, camera);
}