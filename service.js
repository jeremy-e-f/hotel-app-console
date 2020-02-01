// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
const request = require('request-promise-native');
const{
    urlListeClients,
    urlCreerClient,
    urlRechercherClientParNom,
    urlVerifierDisponibilite
} = require('./config.js');

class Service{

    listerClients(callbackFn, errorFn){
        // TODO visualiser l'adresse https://jsonplaceholder.typicode.com/posts avec votre navigateur.
        // les données sont exposées au format JSON.
        // Envoie de la requête http
        // err -> objet erreur en cas de code 4XX ou 5XX
        // res -> objet réponse HTTP complet
        // body -> corps de la réponse
        // L'option { json: true } permet d'obtenir un objet JavaScript dans body (au lieu d'une chaîne de caractères).
        return request(urlListeClients, { json: true });
    }

    rechercherClientParNom(nom){
        return request(urlRechercherClientParNom+nom, { json: true });
    }

    creerClient(nom, prenoms){
        return request.post({
            url: urlCreerClient,
            body: {
                'nom':nom,
                'prenoms':prenoms
            },
            json: true
        });
    }

    verifierDisponibilite(dateDebut, dateFin){
        return request.post({
            url: urlVerifierDisponibilite,
            body: {
                'dateDebut':dateDebut,
                'dateFin':dateFin
            },
            json: true
        });
    }

}
/*
exports.listerClients= listerClients;
exports.rechercherClientParNom= rechercherClientParNom;
exports.creerClient= creerClient;
exports.verifierDisponibilite= verifierDisponibilite;
*/
exports.Service= Service;