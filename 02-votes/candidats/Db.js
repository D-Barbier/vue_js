/**
 * Class Db
 * Manipule le JSON des candidats
 */

class Db
{
    // js n'a pas de type string et etc
    constructor(){
        this.applicants = [];
    }


    async fetch(){

        let response = await fetch('./candidats/candidats.json');
        this.applicants = await response.json();

        // ajoute un "attribut" vote dans le json 
        this.applicants.forEach(element => element.votes=0);


        return this.applicants;
    }
}


export { Db }