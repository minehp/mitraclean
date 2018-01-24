<template>
  <div class="home">
    {{test}}
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      test : 'yuda'
    }
  }
}
</script>

<style>
  .home {
    height: 50em;
    border: solid;
  }
</style>
