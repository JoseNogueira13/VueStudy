<template>
  <div>
    <Card />
    <DynamicFontSize />
  </div>

</template>

<script>
import Card from "./components/card.vue";
import DynamicFontSize from "./components/DynamicFontSize.vue";

export default {
  components: {
    Card,
    DynamicFontSize,
  },
};

</script>