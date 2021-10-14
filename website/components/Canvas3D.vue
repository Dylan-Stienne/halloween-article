<template>
<section>
   <div id="object"></div>
</section>
</template>
<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export default {
  name: 'Canvas3d',
  data() {
    return {
      cube: null,
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
      skull: null,
      cube: null
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init () {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
      this.camera.position.y = 15;
      var loader = new GLTFLoader();
      loader.load('/models/skull.glb', ( gltf ) =>
        {
          console.log(gltf);
          this.skull = gltf.scene.children[0];  // skull 3D object is loaded
          this.scene.add(this.skull);
        });

      this.light = new THREE.DirectionalLight( 0xffffff, 1 );
      this.light.position.set(5,5,10);
      this.scene.add(this.light);
      this.renderer = new THREE.WebGLRenderer({alpha: true});
      this.renderer.setSize(800,800);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
      this.renderer.domElement.style.display = "flex";
       this.renderer.domElement.style.margin = "auto";
      this.renderer.domElement.style.marginTop = "10px";
      document.getElementById('object').appendChild(this.renderer.domElement)

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.minDistance = 10;
      this.controls.maxDistance = 20;
      this.controls.update();
    },
    animate() {
      requestAnimationFrame(this.animate)

      this.controls.update();
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>
