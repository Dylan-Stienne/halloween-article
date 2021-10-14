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
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init () {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        16,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      this.renderer = new THREE.WebGLRenderer({alpha: true});
      this.renderer.setSize( window.innerWidth/4 , window.innerHeight/4);
      this.renderer.domElement.style.margin = "auto";
      document.getElementById('object').appendChild(this.renderer.domElement)


      // const geometry = new THREE.BoxGeometry(1, 1, 1);

      // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      // this.cube = new THREE.Mesh(geometry, material);
       const loader = new GLTFLoader();
      const url = '/models/skull.glb';
       loader.loadAsync(url, ( gltf ) =>
        {
           const skull = gltf.scene;  // skull 3D object is loaded
           console.log(skull)
           skull.scale.set(2, 2, 2);
           skull.position.y = 4;
           this.scene.add(skull);
        }, undefined, ( error ) => {

	        console.error( error );

        });

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
