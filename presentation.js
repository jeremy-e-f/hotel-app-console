
// récupération du module `readline`
const readline = require('readline');
// création d'un objet `rl` permettant de récupérer la saisie utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const {Service} = require('./service.js');
const service= new Service();

class Presentation{

    start(){
        this.startMenu();
    }

    startMenu(){
        const chaineMenu= `
        Menu
~.~.~.~.~.~.~.~.~.~.~
1. Lister les clients
2. Ajouter un client
3. Rechercher un client par nom
4. Vérifier la disponibilité d'une chambre
99. Sortir

Veuillez saisir votre choix:
        `;

        // récupération de la saisie utilisateur
        rl.question(chaineMenu, saisie => {
            // la variable `saisie` contient la saisie effectuée
            console.log(`Votre choix : ${saisie}`);
            switch(saisie){
                case '1':
                    service.listerClients()
                    .then(data => {
                        console.log('Clients trouvés: ');
                        afficherListeClients(data);
                        this.startMenu();
                    })
                    .catch(err => console.log(`Une erreur s'est produite: ${err}`));
                    break;

                case '2':
                    rl.question('Veuillez saisir le nom du nouveau client: ', nom => {
                        console.log(nom); 
                        rl.question('Veuillez saisir le (les) prénom(s) du nouveau client: ', prenoms => {
                            console.log(prenoms);

                            service.creerClient(nom, prenoms)
                            .then(data => {
                                console.log('Enregistrement du client...');
                                console.log(data);
                                this.startMenu();
                            })
                            .catch(err => console.log(`Une erreur s'est produite: ${err}`));
                        });
                    });                
                    break;

                case '3':
                    rl.question('Veuillez saisir le nom du client: ', nom => {
                        service.rechercherClientParNom(nom)
                        .then(data => {
                            console.log('Clients trouvés: ');
                            afficherListeClients(data);
                            this.startMenu();
                        })
                        .catch(err => console.log(`Une erreur s'est produite: ${err}`));
                    });
                    break;

                case '4': /* A terminer */
                    rl.question('Veuillez saisir la période pour laquelle vous voulez vérifier la disponibilité des chambres.\nDate de début: ', dateDebut => {
                        rl.question('Date de fin: ', dateFin => {
                            console.log(` Du ${dateDebut} au ${dateFin} :`);

                            service.verifierDisponibilite(dateDebut, dateFin)
                            .then(data => {
                                console.log(data);
                                this.startMenu();
                            })
                            .catch(err => console.log(`Une erreur s'est produite: ${err}`));
                        });
                    });                
                    break;

                case '99':
                    rl.close(); // Attention, une fois l'interface fermée, la saisie n'est plus possible
                    console.log('Aurevoir');
                    break;
            }
        });

    }

}

function afficherListeClients(listeClients){
    listeClients.forEach(client => {
        console.log(`=> #${client.uuid} ${client.prenoms} ${client.nom}`);
    });
}

exports.Presentation= Presentation;
