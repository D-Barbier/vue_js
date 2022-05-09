<template> 
<!--
     <div id="app">
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="applicant in db.applicants" :key="applicant.id">
                    <td><img :src="getPhotoUrl(applicant.id)" class="photo" alt="Photo du candidat"></td>
                    <td>{{ applicant.id }}</td>
                    <td>{{ applicant.lastname }}</td>
                    <td>{{ applicant.firstname }}</td>
                </tr>
            </tbody>
        </table>
    </div>
 -->
    <section>
            <div class="flex">
                <article class="card" v-for="applicant in db.applicants" :key="applicant.id">
                    <div class="inner">
                        <div class="front">
                            <img :src="getPhotoUrl(applicant.id)" alt="Photo du candidat">
                        </div>
                        <div class="back">
                            <h2>{{ applicant.lastname }} {{ applicant.firstname }}</h2>
                            <div>
                                <img :src="getPhotoUrl(applicant.id)" alt="Photo du candidat">
                            </div>
                        </div>
                    </div>
                </article>
            </div>
             <button class="btn-vote" v-on:click="chargerTab" data-tab="vote">Je vote !</button>
        </section>

       
</template>

<style > 

:root{
--title: lightgreen;
--title-bg: #00000077;
--special : #008c8c;
--bg: white;
--btn-bg : darkgreen;
}


* {
    box-sizing: border-box;
}

html {
    font-size: 62.5%; /* 16px * 62.5% = 10px */
}

body  {
    font-size: 1.6rem;
    background-color: var(--bg);
    color: var(--txt);
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}

/* FLEXBOX */

.flex{
    display: flex;

    /* flex-direction: row;
    flex-wrap: wrap; */
    flex-flow: row wrap;
    /* ecart entre les columns */
    gap: 1rem;
    padding: 1rem;
    justify-content: space-evenly;
    
}

/* CARDS */

.card{
    background: var(--special);
    height: 200px;
    width: 200px;
    perspective: 1000px;
    border: 1px solid var(--title);
}
/* conteneur des 2 faces de la cartes. C'est cet élément qui sera retourné au survol de la souris */
 .card .inner{
    position: relative;
    height: 100%;
    width: 100%;
    /* durée recommandé 0.6 */
    transition: transform 1s;
    /*  permet de mettre l'éléments ciblé dans un espace 3d */
    transform-style: preserve-3d;
}

/* styles pour les faces avant et arrière */
.front, .back{
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
}

/* styles pour la face arrière + on retourne la face arrière par défaut */
.back{
    transform: rotateY(180deg);
    background-color: var(--title-bg);

    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
}

/* photos des candidats sur les 2 faces */
.card img{
    width: 100%;
    height: 100%;
}

.back img{
    transform: rotateY(180deg);
}


.card button{
    padding: 1rem;
    margin: 1px;
    width: 48%;
    border-radius: 3px;
    border: 1px solid black;
    background: darkgreen;
    color: white ;
    cursor: pointer;
    
}

/* affichage de la face arrière au survol de la souris */
.card:hover .inner{
    transform: rotateY(180deg);
}

/* nom du candidat sur la face arrière */
.card h2{
    margin: 0;
    padding: .4rem;
    background: var(--title-bg);
    color: var(--title);
    border-bottom: 1px solid var(--title);
    text-align:center;
    position: absolute;
    top:0;
    left: 0;
    z-index: 100;
    width: 100%;
}

/* BOUTONS */

/* styles des boutons par défaut */
button {
    padding: 1rem;
    border: 1px solid black;
    background:var(--btn-bg);
    color: var(--bg);
    cursor: pointer;
}

button:hover {
    background: var(--txt);
    color: var(--title);
}

/* bouton de vote sur la page principale */
.btn-vote {
    display: block;
    width: 100%;
    padding: 2rem 1rem;
    margin: 1rem 0 0 0;
    text-transform: uppercase;
    font-weight: bold;
}
</style>

<script>
import { Db } from "../assets/Db.js";

export default {
     data() {
        return {
           db: new Db(),
        }
    },

    async mounted(){
        this.db.fetch();
    },
     methods: {
        getPhotoUrl(id){
            return './candidats/' + id + '.jpg';
        }
    }
}



</script>