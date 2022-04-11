import { Db } from "./candidats/Db.js";


const appVote = {

    data() {
        return {
           db: new Db(),
           activeTab : 'list' // vote // results;
        }
    },

    async mounted() {
        this.db.fetch();
    },

    

    methods: {
        getPhotoUrl(id){
            return './candidats/' + id + '.jpg';
        },

        chargerTab(e) {

            this.activeTab=e.target.dataset.tab;

        }
    }

} // fin de app


Vue.createApp(appVote).mount('#app');