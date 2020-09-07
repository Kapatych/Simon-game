<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <Simon />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import Simon from "@/views/Simon.vue";
export default {
  name: "App",
  components: { TheHeader, TheFooter, Simon }
};
</script>

<style lang="scss">
*,
:after,
:before {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  height: 100%;
  font-family: "Open Sans";
}
body {
  min-width: 320px;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 24px;
  font-style: normal;
}
img {
  max-width: 100%;
  height: auto;
}
p {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
}
.main {
  flex: 1 0 auto;
}
</style>
