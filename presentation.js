
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
99. Sortir

Veuillez saisir votre choix:
        `;

    // récupération de la saisie utilisateur
    rl.question(chaineMenu, function(saisie) {
        // la variable `saisie` contient la saisie effectuée
        console.log(`Votre choix : ${saisie}`);
        switch(saisie){
            case "1":
                var moduleService= require("./service.js");
                moduleService.listerClients(function(data){
                    data.forEach(client => {
                        console.log(` #${client.uuid} ${client.prenoms} ${client.nom}`);
                    });
                    startMenu();
                });
                break;

            case "99":
                rl.close(); // attention, une fois l'interface fermée, la saisie n'est plus possible
                console.log("Fini");
                break;
        }
    });

}

exports.start= start;

