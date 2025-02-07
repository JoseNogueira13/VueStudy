<template>
    <div>
        <input v-model="password" type="password" placeholder="Enter Password">
        <button @click="login">Login</button>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

export default {
    data(){
        return {
            password: ''
        }
    },
    setup() {
        const store = useUserStore()
        const router = useRouter()
        return { store, router }
    },
    methods: {
        login(){
            this.store.login(this.password)
            if(this.store.isAuthenticated){
                this.$router.push('/')
            }
        }
    }
}

</script>
