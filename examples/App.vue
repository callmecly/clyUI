<template>
  <div id="app">
    <cly-demo></cly-demo>
    <cly-card imgSrc="logo.png" summary="cly测试"></cly-card>
    <br />
    <cly-card imgSrc="logo.png" summary="cly测试">
      <template #footer>
        <div>cly测试插槽</div>
      </template>
    </cly-card>
    <br />
    <cly-card :widht="370" :imgHeight="90" imgSrc="logo.png" summary="cly测试">
      默认插槽

      <template #footer>
        <div>cly测试插槽</div>
      </template>
    </cly-card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-famicly: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
