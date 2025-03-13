import Kep from "./Kep.js";

export default class Galeria{
    #lista=[];
    constructor(lista,szulElem){
        this.#lista=lista;
        this.szulElem=szulElem;
        this.megjelenit();
    }
    megjelenit(){
        for (let index = 0;index < this.#lista.length; index++){
            const element = this.#lista[index];
            const KEP=new Kep(element.kep,element.cim,element.index,this.szulElem)
        }
    }
}