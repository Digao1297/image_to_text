<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
#app {
  height: 100vh;
  width: 100%;
  background-color: #011126;
}

@media only screen and (max-width: 1000px) {
  #app {
    height: 100%;
  }
}
</style>
