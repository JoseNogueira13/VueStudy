<template>
    <table>
      <tbody>
        <tr>
          <td><ItemDetails :name="item.name" :price="item.price" /></td>
          <td><RemoveButton /></td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  import ItemDetails from './ItemDetails.vue';
  import RemoveButton from './RemoveButton.vue';
  
  export default {
    components: { ItemDetails, RemoveButton },
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  