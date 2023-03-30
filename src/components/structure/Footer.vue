<template>
  <footer class="bg-dark text-white text-center">
    <div class="container p-3 pb-0">
      <a v-for="link in links" class="btn btn-floating m-1 text-white" target="_blank" :href="link.url" role="button">
        <font-awesome-icon :icon="link.icon.split(' ')"/>
      </a>
    </div>
    <div class="text-center p-3">© {{ new Date().getFullYear() }} - Valentin PUCCETTI - NodeJS v</div>
  </footer>
</template>
<script>
  export default { props: ["links"] };
</script>
