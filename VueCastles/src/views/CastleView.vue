<template>
    <div>
        {{ getCastleDesc }}
        <button @click="goBack">Return</button>
    </div>
</template>

<script>
import { computed } from 'vue'
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
        computed: {
                getCastleDesc () {
                    const id = this.$route.params.castleId
                    const castle = this.castles.find(castle => castle.id == id)
                    return castle.desc
                }
        },
        methods: {
            goBack () {
                router.go(-1)
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>