<template>
    <div>
        <p>{{ sumNumbers }}</p>
    </div>

</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    sumNumbers() {
        let sum = 0;
        for (let i = 0; i < this.numbers.length; i++) {
            sum += this.numbers[i];
        }
        return sum;
    }
  }
}
</script>