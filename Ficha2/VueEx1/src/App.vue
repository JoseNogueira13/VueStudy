<template>

  <div>
    <UserProfile />

    <ShoppingCart />
  </div>

</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue';
import UserProfile from './components/UserProfile.vue';

export default {
  components: { 
    UserProfile,
    ShoppingCart
  }
}


</script>