<template>
<tr>
    <td>{{ message }}</td>
</tr>

</template>

<script>
export default {
  name: 'SecondChild',
  data() {
    return {
      message: 'Im the second child'
    }
  }
}
</script>
