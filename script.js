import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff); 
light.position.set(5,10,0);
scene.add(light);

const light2 = new THREE.AmbientLight(0xffffff, 0.3); 
light2.position.set(-5,10,0);
scene.add(light2);const light3 = new THREE.DirectionalLight(0xFFFEA6, 3);

camera.position.y = 0;
camera.position.x = 0;
camera.position.z = 10;

var model;
const loader = new GLTFLoader();

loader.load(
    "assets/scene.gltf",
    
    function (gltf) {
        scene.add(gltf.scene);
        gltf.animations; 
        gltf.scene; 
        gltf.scenes; 
        gltf.cameras; 
        gltf.asset; 
        model = gltf.scene;
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
        console.log("An error happened", error);
    }
);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    if (model) {
        model.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
}

animate();