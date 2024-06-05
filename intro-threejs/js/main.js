import * as THREE from "./three.js";

//Crear una escena
const scene = new THREE.Scene();

//Crea una cámara
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//Crear un render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

//Dibujar un cuboide
const geometry = new THREE.BoxGeometry(1, 1, 1);
//Dibujar el material para la geometria
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//Dibuja la geometria con el material
const cube = new THREE.Mesh(geometry, material);
//Agrega el cubo a la escena
scene.add(cube);

camera.position.z = 3;

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
