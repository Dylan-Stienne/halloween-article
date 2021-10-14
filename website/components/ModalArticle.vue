<template>
  <div
    class="absolute w-screen h-screen z-50 flex justify-center items-center bg-grey overflow-y-auto bg-opacity-80"
    @click="$emit('close')"
    :style="`top: ${getScrollY()}px`"
  >
    <div class="m-5">
      <img
      src="@/assets/img/poster.png"
      alt=""
      class="
        bg-primary-light
        dark:bg-orange-light
        p-5
        w-full
        max-w-2xl
        bg-primary-light
        dark:bg-orange-light
        rounded-lg
      "
      @click="$emit('open')"
    />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.classList.add("overflow-hidden");
  },
  beforeDestroy() {
    document.body.classList.remove("overflow-hidden");
  },
  methods: {
    getScrollY() {
      return window.scrollY;
    },
  },
};
</script>
