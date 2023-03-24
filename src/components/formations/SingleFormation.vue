<template>
  <li class="timeline-item">
    <div class="timeline-info">
      <span>{{ formation.date }}</span>
    </div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h5 class="timeline-title mb-md-3">
        {{ formation.diplome }}
        <a v-if="formation.url" :href="formation.url" target="_blank">{{ formation.school }}</a>
        <a class="small text-gray" v-if="!formation.url">{{ formation.school }}</a>
      </h5>
      <ul data-aos="fade-left">
        <li v-for="desc in formation.description" :key="desc.id">
          {{ desc.description }}
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
export default {props: ["formation"] };
</script>
<style></style>
