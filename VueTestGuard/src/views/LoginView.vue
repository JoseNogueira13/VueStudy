<template>
    <div>
        isto e uma pagina de Login

        <form>
            <input type="text" v-model="username" placeholder="Username">
            <input type="password" v-model="password" placeholder="Password">
            <button @click.prevent="login">Login</button>
        </form>
        <p v-if="error">Erro</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
                error: false // Added error property
            }
        },
        methods: {
            login() {
                if (this.username === 'admin' && this.password === '1234') {
                    localStorage.setItem('isAuthenticated', 'true')
                    this.error = false
                    const from = this.$route.query.from || '/'
                    this.$router.push(from) 
                } else {
                    this.error = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>