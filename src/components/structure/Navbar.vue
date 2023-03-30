<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="main-nav">
    <div class="container">
      <a class="logo navbar-brand d-flex align-items-center" href="#">
        <slot/>
      </a>

      <div class="collapse navbar-collapse bg-white" id="navbar4">
        <ul class="navbar-nav ms-auto">
          <li v-for="link in links" :key="link.name" class="nav-item px-lg-2">
            <a class="nav-link" :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default { props: ["links"] };
</script>
<style lang="scss" scoped>
* {
  font-weight: 600;
}

.logo {
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  font-display: auto;
  font-family: monospace, monospace;
}
</style>
