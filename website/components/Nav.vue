<template>
  <nav class="w-full h-16 flex justify-center">
    <div class="w-full h-full max-w-content relative flex">
      <div class="bg-orange-light w-screen absolute right-full h-full"></div>
      <div class="bg-orange-light w-screen absolute left-full h-full"></div>
      <div
        class="
          bg-orange-light
          w-3/5
          absolute
          left-0
          h-full
          flex flex-row-reverse
          items-center
          justify-between
        "
        :class="breakingClassesNavLeft"
      >
        <img
          src="@/assets/img/nav-break.png"
          alt=""
          class="h-full transform translate-x-full mr-1 rotate-180"
        />
        <div class="relative w-full">
          <p class="dark:text-orange text-2xl" :class="breakingClassesNavTitle">
            Mon vieux blog
          </p>
        </div>
      </div>
      <div
        class="
          bg-orange-light
          w-2/5
          absolute
          flex
          right-0
          h-full
          items-center
          justify-between
        "
        :class="breakingClassesNavRight"
      >
        <img
          src="@/assets/img/nav-break.png"
          alt=""
          class="h-full transform -translate-x-full ml-1"
        />
        <Button @click="breaking" :class="breakingClassesNavButton">
          Se connecter
        </Button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.anim-button {
  animation: button 5s ease-in-out infinite;
}
@keyframes button {
  from {
    transform: rotate(-55deg);
  }
  50% {
    transform: rotate(-75deg);
  }
  to {
    transform: rotate(-55deg);
  }
}

.anim-title {
  animation: title 3s ease forwards;
}
@keyframes title {
  from {
    margin-left: 0;
    margin-top: 0;
    transform: translateX(0);
  }
  10% {
    margin-top: 20px;
  }
  60% {
    transform: translateX(75%) rotate(0);
  }
  to {
    margin-left: 65%;
    margin-top: 20px;
    transform: translateX(80%) rotate(-5deg);
  }
}
</style>

<script>
export default {
  data() {
    return {
      breakingClassesNavLeft: "",
      breakingClassesNavRight: "",
      breakingClassesNavTitle: "",
      breakingClassesNavButton: "",
    };
  },
  methods: {
    breaking() {
      this.breakingClassesNavLeft = "transition-all duration-300 pl-5 origin-top-left transform rotate-12";
      this.breakingClassesNavRight = "transition-all duration-300 pr-5 origin-top-right transform -rotate-12";
      this.breakingClassesNavButton = "transition-all mr-16 mt-8 origin-top-right anim-button";
      this.breakingClassesNavTitle = "transition-all anim-title";
    },
  },
};
</script>
