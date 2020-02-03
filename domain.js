"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = /** @class */ (function () {
    function Client(_uuid, _nom, _prenom) {
    }
    Object.defineProperty(Client.prototype, "uuid", {
        get: function () {
            return this.uuid;
        },
        set: function (nUuid) {
            this.uuid = nUuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "nom", {
        get: function () {
            return this.nom;
        },
        set: function (nNom) {
            this.nom = nNom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "prenoms", {
        get: function () {
            return this.prenoms;
        },
        set: function (nPrenoms) {
            this.prenoms = nPrenoms;
        },
        enumerable: true,
        configurable: true
    });
    return Client;
}());
exports.Client = Client;
var Chambre = /** @class */ (function () {
    function Chambre(_uuid, _numero, surfaceEnM2) {
    }
    Object.defineProperty(Chambre.prototype, "uuid", {
        get: function () {
            return this.uuid;
        },
        set: function (nUuid) {
            this.uuid = nUuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chambre.prototype, "numero", {
        get: function () {
            return this.numero;
        },
        set: function (nNumero) {
            this.numero = nNumero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chambre.prototype, "surfaceEnM2", {
        get: function () {
            return this.surfaceEnM2;
        },
        set: function (nsurfaceEnM2) {
            this.surfaceEnM2 = nsurfaceEnM2;
        },
        enumerable: true,
        configurable: true
    });
    return Chambre;
}());
exports.Chambre = Chambre;
