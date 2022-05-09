/**
 * Class Db
 * Manipule le JSON des candidats
 */

class Db {
    constructor() 
    {
        this.applicants = [];
    }

    async fetch() {

        let response = await fetch('/candidats/candidats.json');
        this.applicants = await response.json();
        return this.applicants;
    }
}


export { Db }