// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request');

function listerClients(callbackFn){
    // TODO visualiser l'adresse https://jsonplaceholder.typicode.com/posts avec votre navigateur.
    // les données sont exposées au format JSON.
    // Envoie de la requête http
    // err -> objet erreur en cas de code 4XX ou 5XX
    // res -> objet réponse HTTP complet
    // body -> corps de la réponse
    // L'option { json: true } permet d'obtenir un objet JavaScript dans body (au lieu d'une chaîne de caractères).
    request('http://localhost:8080/clients', { json: true }, function(err, res, data) {
    if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
        callbackFn(data);
    });
}

function rechercherClientParNom(nom, callbackFn){
    request('http://localhost:8080/clients?nom='+nom, { json: true }, function(err, res, data) {
        if (err) { return console.log('Erreur', err); }
        callbackFn(data);
    });
}

function creerClient(nom, prenoms, callbackFn){
    request.post({
        url: 'http://localhost:8080/clients',
        body: {
            "nom":nom,
            "prenoms":prenoms
        },
        json: true
    }, function(err, response, status){
        if (err) { return console.log('Erreur', err); }
        callbackFn(status);
    });
}

function verifierDisponibilite(dateDebut, dateFin, callbackFn){
    request.post({
        url: 'http://localhost:8080/disponibilite',
        body: {
            "dateDebut":dateDebut,
            "dateFin":dateFin
        },
        json: true
    }, function(err, response, data){
        if (err) { return console.log('Erreur', err); }
        callbackFn(data);
    });
}

exports.listerClients= listerClients;
exports.rechercherClientParNom= rechercherClientParNom;
exports.creerClient= creerClient;
exports.verifierDisponibilite= verifierDisponibilite;