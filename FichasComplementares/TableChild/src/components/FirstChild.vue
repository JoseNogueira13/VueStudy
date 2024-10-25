<template>

<div>
    <table>
        <tr>
            <td>{{ message }}</td>
            <FirstChild1 />
            <FirstChild2 />
            <FirstChild3 />
        </tr>
    </table>
</div>
    
</template>

<script>
import FirstChild1 from "./FirstChild1.vue";
import FirstChild2 from "./FirstChild2.vue";
import FirstChild3 from "./FirstChild3.vue";

export default {
    name: 'FirstChild',
    components: {
        FirstChild1,
        FirstChild2,
        FirstChild3
    },
    data() {
        return {
            message: 'Im the first child'
        }
    }
}
</script>

