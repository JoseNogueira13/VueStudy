<template>
    <div>
        <button @click="increment">+</button>
        <p>{{ num }}</p>
        <button @click="decrement">-</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            num: 0
        }
    },
    methods: {
        increment() {
            this.num++
        },
        decrement() {
            this.num--
        }
    }
}

</script>