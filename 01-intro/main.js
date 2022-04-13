// 2-3 ancien d'angular 
//react = facebook

const app ={
    //fonction data contient les données de l'application
    //cherche une variable qui porte le même nom dans l'index 
    data(){
        return {
            message: 'Hello world !',
            nombre: 0,
            prenom:'',
            movies: []
        }
    },//fin de data


    //au chargement de l'application
    //monted = fonction qui monte l'application 
     async mounted(){
        // setInterval = execute un bloc de code toute les x secondes
        setInterval(() =>{
            this.nombre++;
        },1000);

        setTimeout(()=>{
            this.message='Welcome !'
        },2000);

        let response = await fetch('https://api.devoldere.net/dataset/movies.json');
        this.movies = await response.json();

        // array shift --> supprime le 1er element d'un tableau
        // array unshift --> insere un element à l'indice 0 du tableau 
        // array push -->  ajoute un ou plusieurs éléments à la fin d'un tableau
        // array pop -->  supprime le dernier élément d'un tableau

        setTimeout(()=>{
            this.movies.shift();
            this.movies[0].movie_title ="Chems chez les DWWM le retour !";
        },5000);
       
    },//fin de mounted

    //pas une fonction, c'est un attribut
    methods:{
        reinitialiser(){
            this.nombre=0;
        },

        supprimerFilm(event){
            let id = event.target.dataset.id;
           
            // let result = [];
            // for(let movie of movies ){
            //     if (movie.movie_id !=id){
            //         result.push(movie);
            //     }
            // }

            this.movies = this.movies.filter(movie => movie.movie_id != id);

            console.log(event.target.dataset.id);
        }
    }//fin de methods

}//fin de app

Vue.createApp(app).mount('#app');