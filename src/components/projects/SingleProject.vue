<template>
    <div class="col-sm-12 col-md-4 mb-3">
        <a class="text-primary" target="_blank" :href="`${project.link}`">
        <div class="card">
            <img class="card-img-top" :src="require(`@/assets/images/projects/${project.image}`)"/>
            <div class="card-header px-4 pt-4">
                <h5 class="card-title mb-0 text-black">{{project.title}}</h5>
                <div class="text-primary my-2">{{project.type}}</div>
                <p class="text-black">{{project.text}}</p>
            </div>


        </div></a>
    </div>
</template>
<script>
    export default { props: ["project"] };
</script>