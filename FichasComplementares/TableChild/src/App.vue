<template>
<div>
  <FirstChild />
  <SecondChild />
  <ThirdChild />

</div>

</template>


<script>
  import FirstChild from "./components/FirstChild.vue";
  import SecondChild from "./components/SecondChild.vue";
  import ThirdChild from "./components/ThirdChild.vue";

  export default {
    name: 'App',
    components: {
      FirstChild,
      SecondChild,
      ThirdChild
    }
  }

</script>

<style>
tr {
    border: 3px solid yellow;
    text-align: left;
    padding: 8px;
}
td {
    border: 3px solid yellow;
    text-align: left;
    padding: 8px;
}
</style>
