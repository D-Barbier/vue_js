import { Db } from "./candidats/Db.js";


const appVote = {

    data() {
        return {
           db: new Db()
        }
    },

    async mounted() {
        this.db.fetch();
    },

    

    methods: {
        getPhotoUrl(id){
            return './candidats/' + id + '.jpg';
        }
    }

} // fin de app


Vue.createApp(appVote).mount('#app');