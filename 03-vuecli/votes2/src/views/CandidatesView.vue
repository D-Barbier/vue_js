<template>
    <h1> {{ title }}</h1>
    <CandidatesList />
</template>

<style scoped>
    h1{
        color:red;
    }
</style>



<script>

import CandidatesList from '../components/CandidatesList.vue'

    export default {
        components:{
            CandidatesList
        },
        data(){
            return {
                title:" Liste des candidats"
            }
        },
    }
</script>