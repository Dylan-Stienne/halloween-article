<template>
  <div>
    <Nav />
    <Article />
    <Canvas3D />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loop: setInterval(this.toggleDarkMode, 3000),
    };
  },
  methods: {
    toggleDarkMode() {
      this.$nuxt.$store.commit("darkMode/enable");
      setTimeout(function () {
        this.$nuxt.$store.commit("darkMode/disable");
      }, 150 + 300 * Math.random());

      // create next loop randomly
      clearInterval(this.loop);
      var timeArray = new Array(300, 500, 3000, 5000);
      var newTime = timeArray[Math.floor(timeArray.length * Math.random())];
      this.loop = setInterval(this.toggleDarkMode, newTime);
    },
  },
};
</script>
