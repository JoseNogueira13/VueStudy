<template>
    <div>
        <table>
            <tr v-for="(castle) in castles" :key="castle.id">
                <td>{{ castle.id }}</td>
                <td>{{ castle.name }}</td>
                <td><img :src="castle.photo" alt="castle.name" style="width: 25%" height="25%"></td>
                <td>
                    <Router-link :to="{name: 'castle', params: {castleId: castle.id}}">VER MAIS</Router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                castles: [
                    {
                        id: 1,
                        name: 'Castelo de Almourol',
                        desc: 'O Castelo de Almourol é um dos mais emblemáticos castelos portugueses, que se ergue numa pequena ilha no rio Tejo, no concelho de Vila Nova da Barquinha.',
                        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Almourol_034.jpg/450px-Almourol_034.jpg'
                    },
                    {
                        id: 2,
                        name: 'Castelo de Guimarães',
                        desc: 'O Castelo de Guimarães localiza-se na freguesia de Oliveira do Castelo, cidade e concelho de Guimarães, no distrito de Braga, em Portugal.',
                        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Castelo_de_Guimaraes.jpg/1920px-Castelo_de_Guimaraes.jpg'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>