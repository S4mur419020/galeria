import KiemeltKep from "./KiemeltKep.js";

export default class NagyKep{

    #aktIndex=0;
    #lista=[];
    constructor(lista){
        this.KepElem=document.getElementsByClassName("kiemeltkep")[0];
        this.#lista=lista;
        new KiemeltKep(
            this.#lista[this.#aktIndex].kep,
            this.#lista[this.#aktIndex].cim,
            this.nagyElem
        );
        this.balElem=document.querySelector(".bal");
        this.jobbElem=document.querySelector(".jobb");
        this.esemenykezelo();
    }
    
    esemenykezelo(){
        this.balElem.addEventListener("click", function(){
            console.log(aktIndex);
            aktIndex--;
            aktIndex<0?(this.aktIndex=this.lista.length-1) : (this.aktIndex=this.aktIndex);
            const NAGYKEP=new KiemeltKep(
                this.lista[this.aktIndex].kep,
                this.lista[this.aktIndex].cim,
                nagyElem);
        });

        this.jobbElem.addEventListener("click", function(){
            console.log(aktIndex);
            aktIndex++;
            aktIndex > this.lista.length-1 ? (this.aktInde=0) : (this.aktIndex=this.aktIndex);
            const NAGYKEP=new KiemeltKep(
                this.lista[this.aktIndex].kep,
                this.lista[this.aktIndex].cim,
                this.nagyElem);
        });
    }
}
