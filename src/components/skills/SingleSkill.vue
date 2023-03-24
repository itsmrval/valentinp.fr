<template>
  <div class="col-sm-12 col-md-4 mb-3">
    <div>
      <div class="text-center">
        <img class="mb-3 top" :src="require(`@/assets/images/${skill.image}`)" width="500"/>
        <h4 class="mb-2">{{ skill.title }}</h4> 
        <ul class="col-md-12 mb-8 close"><li v-for="icon in skill.icons"><img :src="require(`@/assets/images/skills/${icon}.svg`)" class="list"></li></ul>
      </div>
      <div>
        <ul><li v-for="line in skill.lines">{{line}}</li></ul>
      </div>
    </div>
  </div>
</template>
<script>
export default { props: ["skill"] };
</script>
<style>
ul.close {
  padding-left: 0px;
  text-align: center;
}
ul.close > li {
  display: inline-block;
  padding: 10px 10px;
}

img.top {
  width: 256px;
  height: 256px;
}

img.list {
  width: 32px;
  height: 32px;
}



</style>
