<template>
  <index-container>
    <div class="col-10 col-sm-7 col-lg-7">
      <img class="d-block mx-lg-auto img-fluid" :src="require(`@/assets/images/${src}`)"/>
    </div>
    <div class="col-lg-5">
      <h1 class="display-5 fw-bold lh-1 mb-4">
        <slot name="th1"/>
      </h1>
      <p class="lead mb-4">
        <slot/>
      </p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <slot name="btn"/>
      </div>
    </div>
  </index-container>
</template>
<script>
import IndexContainer from "./IndexContainer.vue";
export default {props: ["src"], components: {IndexContainer}};
</script>