<template>
  <span class="underlined"><slot></slot></span>
</template>

<style lang="scss" scoped>
  span.underlined {
    position: relative;
  }

  span.underlined:after {
    background-color: #ededed;
    content: " ";
    height: 40%;
    position: absolute;
    left: 0;
    top: 65%;
    width: 90%;
    z-index: -1;
  }
</style>
