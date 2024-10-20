<template>

    <div>
        <ProductData/>
        <DynamicNumber/>
    </div>

</template>

<script>
    import DynamicNumber from './components/DynamicNumber.vue';
    import ProductData from './components/ProductData.vue'

    export default {
        components: {
            ProductData,
            DynamicNumber
        }
    }

</script>
