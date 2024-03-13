import * as THREE from 'three';

// Creates a base plane that the grid will be drawn on top of
export const planeMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        visible: false
    })
)
planeMesh.rotateX(-Math.PI / 2);

// The grid that helps with visualizing the plane mesh
export const grid = new THREE.GridHelper(20, 20);
