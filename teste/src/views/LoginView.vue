<template>
    <div>
        <h2>login</h2>
        <input v-model="email"  type="email" placeholder="Write your e-mail">
        <input v-model="password" type="password" placeholder="Enter Password" />
        <button @click="login">Entrar</button>
    </div>
</template>

<script>
import { useMainStore } from '@/stores/main';
import { useRouter } from 'vue-router';
    export default {
        data() {
            return { email: '', password: ''}
        },
        setup() {
            const store = useMainStore();
            const router = useRouter();
            return {store, router}
        },
        methods: {
            login() {
                this.store.login(this.email, this.password)
                if (this.store.isAuthenticated) this.$router.push('/')
            }
        }
    }
</script>