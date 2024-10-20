<template>
    <div>
        <p>Bem-vindo, {{ userName }}</p>
        <p>{{ userName }} tem {{ userAge }} anos e é {{ userStatus }}</p>
        <p v-html="userBio"></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
          userName: "João",
          userAge: 17,
          userBio: "É um programador <em>frontend</em> que adora criar aplicalções em Vue.js"
        }
      },
    computed: {
        userStatus() {
            return this.userAge > 18 ? 'e por isso é um adulto' : 'e por isso é um menor';
        }
    }
}
</script>