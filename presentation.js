"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// récupération du module `readline`
//const readline = require('readline');
var readline = __importStar(require("readline"));
// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var service_1 = require("./service");
//const {Client, Chambre} = require('./domains.js');
//import {Service} from './service.js';
var service = new service_1.Service();
var Presentation = /** @class */ (function () {
    function Presentation() {
    }
    Presentation.prototype.start = function () {
        this.startMenu();
    };
    Presentation.prototype.startMenu = function () {
        var _this = this;
        var chaineMenu = "\n        Menu\n~.~.~.~.~.~.~.~.~.~.~\n1. Lister les clients\n2. Ajouter un client\n3. Rechercher un client par nom\n4. V\u00E9rifier la disponibilit\u00E9 d'une chambre\n99. Sortir\n\nVeuillez saisir votre choix:\n        ";
        // récupération de la saisie utilisateur
        rl.question(chaineMenu, function (saisie) {
            // la variable `saisie` contient la saisie effectuée
            console.log("Votre choix : " + saisie);
            switch (saisie) {
                case '1':
                    service.listerClients()
                        .then(function (data) {
                        console.log('Clients trouvés: ');
                        afficherListeClients(data);
                        _this.startMenu();
                    })
                        .catch(function (err) { return console.log("Une erreur s'est produite: " + err); });
                    break;
                case '2':
                    rl.question('Veuillez saisir le nom du nouveau client: ', function (nom) {
                        console.log(nom);
                        rl.question('Veuillez saisir le (les) prénom(s) du nouveau client: ', function (prenoms) {
                            console.log(prenoms);
                            service.creerClient(nom, prenoms)
                                .then(function (data) {
                                console.log('Enregistrement du client...');
                                console.log(data);
                                _this.startMenu();
                            })
                                .catch(function (err) { return console.log("Une erreur s'est produite: " + err); });
                        });
                    });
                    break;
                case '3':
                    rl.question('Veuillez saisir le nom du client: ', function (nom) {
                        service.rechercherClientParNom(nom)
                            .then(function (data) {
                            console.log('Clients trouvés: ');
                            afficherListeClients(data);
                            _this.startMenu();
                        })
                            .catch(function (err) { return console.log("Une erreur s'est produite: " + err); });
                    });
                    break;
                case '4': /* A terminer */
                    rl.question('Veuillez saisir la période pour laquelle vous voulez vérifier la disponibilité des chambres.\nDate de début: ', function (dateDebut) {
                        rl.question('Date de fin: ', function (dateFin) {
                            console.log(" Du " + dateDebut + " au " + dateFin + " :");
                            service.verifierDisponibilite(dateDebut, dateFin)
                                .then(function (data) {
                                console.log(data);
                                _this.startMenu();
                            })
                                .catch(function (err) { return console.log("Une erreur s'est produite: " + err); });
                        });
                    });
                    break;
                case '99':
                    rl.close(); // Attention, une fois l'interface fermée, la saisie n'est plus possible
                    console.log('Aurevoir');
                    break;
            }
        });
    };
    return Presentation;
}());
exports.Presentation = Presentation;
function afficherListeClients(listeClients) {
    listeClients.forEach(function (client) {
        console.log("=> #" + client.uuid + " " + client.prenoms + " " + client.nom);
    });
}
