<template>
  <button @click="$emit('click')" class="bg-primary-light text-white dark:text-black dark:bg-orange py-1 px-3 rounded"><slot /></button>
</template>

<script>
export default {};
</script>
