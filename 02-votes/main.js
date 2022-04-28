import { Db } from "./candidats/Db.js";


const appVote = {

    data() {
        return {
           db: new Db(),
           activeTab: 'list', // vote // results;
           listVotes: [],
        }
    },

    async mounted() {
        this.db.fetch();
    },

    computed: {
        candidates() {
            return this.db.applicants.sort((a, b) => 0.5 - Math.random());
        },

        candidatesSorted(){
            //bonne pratique 
            let test=this.db.applicants.sort((a,b)=> b.votes - a.votes)
            return test
        },  
        total(){
            //console.log(this.db.applicants.reduce((a,{votes})=>a+votes,0));
            return this.db.applicants.reduce((a,{votes})=>a+votes,0);
        },
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

        vote(event){
            let id = event.target.dataset.id;
            let applicant = this.db.applicants.find(item => item.id == id);

            if(event.target.dataset.vote == "yes" ){
                applicant.votes++;
            }

            //console.log(applicant);

            this.listVotes.push(parseInt(id));

            //console.log(this.listVotes);

            if(this.listVotes.length === this.db.applicants.length) {
                this.activeTab = 'results';
            }
        }

       
    }

} // fin de app


Vue.createApp(appVote).mount('#app');