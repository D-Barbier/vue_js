import { Db } from "./candidats/Db.js";


const appVote = {

    data() {
        return {
           db: new Db(),
           activeTab : 'list', // vote // results;
            listVotes: [],
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

        },

        // voteYes(e) {
        //     let id =e.target.dataset.id;
        //     let applicant = this.db.applicants.find(item => item.id == id);
        //     applicant.votes++;
        //     console.log(applicant);
        // },

        // voteNo(e){
        //     let id =e.target.dataset.id;
        //     let applicant = this.db.applicants.find(item => item.id == id);
        //     applicant.votes--;
        //     console.log(applicant);
        // },
        
        vote(e){

            let id = e.target.dataset.id;
            let applicant = this.db.applicants.find(item => item.id == id);
            
            if(e.target.id = "yes"){

                applicant.votes++;
               
            }else{
                if(applicant.votes >0){

                    applicant.votes--;

                }
            }
            this.listVotes.push(parseInt(id));
            console.log(applicant);
        }
    }

} // fin de app


Vue.createApp(appVote).mount('#app');