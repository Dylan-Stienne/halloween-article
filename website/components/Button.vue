<template>
  <button @click="$emit('click')" class="text-black bg-orange dark:text-grey py-1 px-3 rounded"><slot /></button>
</template>

<script>
export default {};
</script>
