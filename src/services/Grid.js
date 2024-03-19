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
planeMesh.name = 'ground'

// The grid that helps with visualizing the plane mesh
export const grid = new THREE.GridHelper(20, 20);


export const highlightMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        transparent: true
    })
)
highlightMesh.rotateX(-Math.PI / 2);
highlightMesh.position.set(0.5, 0, 0.5);