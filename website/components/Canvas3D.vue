<template>
  <div id="container">
    <nav>Canva</nav>
    <div id="object"></div>
  </div>
</template>
<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'Canvas3d',
  data() {
    return {
      cube: null,
      renderer: null,
      scene: null,
      camera: null,
      controls: null
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      this.renderer = new THREE.WebGLRenderer({alpha: true});
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('object').appendChild(this.renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1);

      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement)

      this.camera.position.z = 5
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
