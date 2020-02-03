
class Client{

    constructor(_uuid:string, _nom:string, _prenom:string){
    }

    get uuid():string{
        return this.uuid;
    }

    set uuid(nUuid:string){
        this.uuid= nUuid;
    } 

    get nom():string{
        return this.nom;
    }

    set nom(nNom:string){
        this.nom= nNom;
    } 

    get prenoms():string{
        return this.prenoms;
    }

    set prenoms(nPrenoms:string){
        this.prenoms= nPrenoms;
    }
}

class Chambre{

    constructor(_uuid:string, _numero:string, surfaceEnM2:number){
    }

    get uuid():string{
        return this.uuid;
    }

    set uuid(nUuid:string){
        this.uuid= nUuid;
    } 

    get numero():string{
        return this.numero;
    }

    set numero(nNumero:string){
        this.numero= nNumero;
    }
    
    get surfaceEnM2():number{
        return this.surfaceEnM2;
    }

    set surfaceEnM2(nsurfaceEnM2:number){
        this.surfaceEnM2= nsurfaceEnM2;
    }

}

//exports.Client= Client;
//exports.Chambre= Chambre;

export {Chambre, Client};
