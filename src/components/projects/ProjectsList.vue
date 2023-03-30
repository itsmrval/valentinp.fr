<template>
    <Container title="Projects">
        <SingleProject v-for="project in projects" :project="project" />
    </Container>
</template>
<script>
    import SingleProject from "./SingleProject.vue";
    import Container from "../structure/Container.vue";

    export default { props: ["projects"], components: { SingleProject, Container } };
</script>
