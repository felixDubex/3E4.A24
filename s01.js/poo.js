const etudiant = {
    matricule: '0533563',
    nom: 'Charron',
    prenom: 'Yannick',
    cours: [{numero:'3E4', prof:'Yannick Charron'}]
}

    class Etudiant {
        constructor(matricule,nom,prenom,cours) {
            this.matricule = matricule;
            this.nom = nom;
            this.prenom = prenom;
            this.cours = cours;
        }

        nomComplet() {
           //TODO: return `${this.prenom} ${this.nom}`;
        }
    }

    class Cours {

    }