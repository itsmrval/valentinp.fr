<template>
  <metainfo/>
  <router-view/>
</template>
<script>
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      title: "Accueil | Valentin PUCCETTI"
    });
  }
};
</script>

<style lang="scss">
  html {
    scroll-behavior: smooth;
  }
  body {
    position: relative;
    font-family: $default-family;
    font-size: $default-font-size;
  }
  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-thumb {
    background: #363636;
  }
  ::-webkit-scrollbar-track {
    background: #fff;
  }
  .btn {
    border-width: 1px;
    cursor: pointer;
    justify-content: center;
    padding: calc(0.5em - 1px) 1em;
    text-align: center;
    white-space: nowrap;
    -webkit-appearance: none;
    align-items: center;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 2.5em;
    line-height: 1.5;
    position: relative;
    vertical-align: top;
  }
  .btn-primary {
    color: white;
  }
  a,
  a:active,
  a:visited {
    text-decoration: none !important;
  }
</style>