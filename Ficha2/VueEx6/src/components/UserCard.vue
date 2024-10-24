<template>
    <div>
        <p v-if="user.showDetails">{{ user.name }} - {{ user.idade }} - {{ user.localidade }}</p>
        <button @click="toggleDetails">
            {{ user.showDetails ? 'ESCONDE' : 'MOSTRA' }}
        </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        idade: 25,
        localidade: 'Lisboa',
        showDetails: true
        }
    }
    },
    methods: {
      toggleDetails() {
        this.user.showDetails = !this.user.showDetails
      }
    }
}

</script>