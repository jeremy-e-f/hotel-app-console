
// récupération du module `readline`
var readline = require('readline');
// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function start(){
    startMenu();
}

function startMenu(){
    var chaineMenu= `
        Menu
~.~.~.~.~.~.~.~.~.~.~
1. Lister les clients
2. Ajouter un client
3. Rechercher un client par nom
4. Vérifier la disponibilité d'une chambre
99. Sortir

Veuillez saisir votre choix:
        `;
    var moduleService= require("./service.js");

    // récupération de la saisie utilisateur
    rl.question(chaineMenu, function(saisie) {
        // la variable `saisie` contient la saisie effectuée
        console.log(`Votre choix : ${saisie}`);
        switch(saisie){
            case "1":
                moduleService.listerClients(function(data){
                    console.log("Clients trouvés: ");
                    afficherListeClients(data);
                    startMenu();
                });
                break;

            case "2":
                rl.question("Veuillez saisir le nom du nouveau client: ", function(nom) {
                    console.log(nom); 
                    rl.question("Veuillez saisir le (les) prénom(s) du nouveau client: ", function(prenoms) {
                        console.log(prenoms);

                        moduleService.creerClient(nom, prenoms, function(data){
                            console.log("Enregistrement du client...");
                            console.log(data);
                            startMenu();
                        });

                    });
                });                
                break;

            case "3":
                rl.question("Veuillez saisir le nom du client: ", function(nom) {
                    moduleService.rechercherClientParNom(nom, function(data){
                        console.log("Clients trouvés: ");
                        afficherListeClients(data);
                        startMenu();
                    });
                });
                break;

            case "4": /* A terminer */
                rl.question("Veuillez saisir la période pour laquelle vous voulez vérifier la disponibilité des chambres.\nDate de début: ", function(dateDebut) {
                    rl.question("Date de fin: ", function(dateFin) {
                        console.log(` Du ${dateDebut} au ${dateFin} :`);

                        moduleService.verifierDisponibilite(dateDebut, dateFin, function(data){
                            console.log(data);
                            startMenu();
                        });

                    });
                });                
                break;

            case "99":
                rl.close(); // attention, une fois l'interface fermée, la saisie n'est plus possible
                console.log("Fini");
                break;
        }
    });

}

function afficherListeClients(listeClients){
    listeClients.forEach(client => {
        console.log(`=> #${client.uuid} ${client.prenoms} ${client.nom}`);
    });
}

exports.start= start;

