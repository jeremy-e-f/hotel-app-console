"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
//const request = require('request-promise-native');
var request_promise_native_1 = __importDefault(require("request-promise-native"));
var _a = require('./config.js'), urlListeClients = _a.urlListeClients, urlCreerClient = _a.urlCreerClient, urlRechercherClientParNom = _a.urlRechercherClientParNom, urlVerifierDisponibilite = _a.urlVerifierDisponibilite;
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.listerClients = function () {
        // TODO visualiser l'adresse https://jsonplaceholder.typicode.com/posts avec votre navigateur.
        // les données sont exposées au format JSON.
        // Envoie de la requête http
        // err -> objet erreur en cas de code 4XX ou 5XX
        // res -> objet réponse HTTP complet
        // body -> corps de la réponse
        // L'option { json: true } permet d'obtenir un objet JavaScript dans body (au lieu d'une chaîne de caractères).
        return request_promise_native_1.default(urlListeClients, { json: true });
    };
    Service.prototype.rechercherClientParNom = function (nom) {
        return request_promise_native_1.default(urlRechercherClientParNom + nom, { json: true });
    };
    Service.prototype.creerClient = function (nom, prenoms) {
        return request_promise_native_1.default.post({
            url: urlCreerClient,
            body: {
                'nom': nom,
                'prenoms': prenoms
            },
            json: true
        });
    };
    Service.prototype.verifierDisponibilite = function (dateDebut, dateFin) {
        return request_promise_native_1.default.post({
            url: urlVerifierDisponibilite,
            body: {
                'dateDebut': dateDebut,
                'dateFin': dateFin
            },
            json: true
        });
    };
    return Service;
}());
exports.Service = Service;
