<template>
  <div>
    <ModalArticle v-if="modalOpened" @close="modalOpened = false" />
    <div>
      <Nav />
      <Article @open="modalOpened = true" />
      <Canvas3D />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loop: setInterval(this.toggleDarkMode, 3000),
      modalOpened: false,
    };
  },
  methods: {
    toggleDarkMode() {
      document.body.classList.add("dark:bg-gradient-to-tr");
      document.body.classList.add("dark:from-black");
      document.body.classList.add("dark:to-orange-light");
      setTimeout(function () {
        document.body.classList.remove("dark:bg-gradient-to-tr");
        document.body.classList.remove("dark:from-black");
        document.body.classList.remove("dark:to-orange-light");
      }, 200);

      // create next loop randomly
      clearInterval(this.loop);
      var timeArray = new Array(300, 500, 3000, 5000);
      var newTime = timeArray[Math.floor(timeArray.length * Math.random())];
      this.loop = setInterval(this.toggleDarkMode, newTime);
    },
  },
};
</script>
