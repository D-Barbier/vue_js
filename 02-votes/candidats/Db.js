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
        return this.applicants;
    }
}


export { Db }