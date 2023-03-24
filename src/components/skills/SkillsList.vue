<template>
  <Container title="Compétences">
    <SingleSkill v-for="skill in skills" :skill="skill" />
  </Container>
</template>
<script>
import SingleSkill from "./SingleSkill.vue";
import Container from "../structure/Container.vue";

export default { props: ["skills"], components: { SingleSkill, Container } };
</script>
