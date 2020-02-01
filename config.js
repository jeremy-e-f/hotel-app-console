const URL_BASE= 'http://localhost:8080';

module.exports = {
    urlListeClients: `${URL_BASE}/clients`,
    urlCreerClient: `${URL_BASE}/clients`,
    urlRechercherClientParNom: `${URL_BASE}/clients?nom=`,
    urlVerifierDisponibilite: `${URL_BASE}/disponibilite`
}
