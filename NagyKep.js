import KiemeltKep from "./KiemeltKep.js";

export default class NagyKep{

    #aktIndex;
    
    constructor(lista){
        
        this.lista=lista;
        this.#aktIndex=0;
        this.nagyElem=document.getElementsByClassName("kiemeltkep")[0];
        
        new KiemeltKep(
            this.lista[this.#aktIndex].kep,
            this.lista[this.#aktIndex].cim,
            this.nagyElem
        );
        this.balElem=document.querySelector(".bal");
        this.jobbElem=document.querySelector(".jobb");
        this.esemenykezelo();
    }
    
    esemenykezelo(){
        window.addEventListener("Kivalaszt",(event)=>{
            console.log(event.detail)
            this.#aktIndex=event.detail;
            new KiemeltKep(this.lista[this.#aktIndex].kep,this.lista[this.#aktIndex].cim,this.nagyElem);
        })



        this.balElem.addEventListener("click",()=>{
            console.log(this.#aktIndex);
            this.#aktIndex--;
            this.#aktIndex<0?(this.#aktIndex=this.lista.length-1) : (this.#aktIndex=this.#aktIndex);
            const NAGYKEP=new KiemeltKep(
                this.lista[this.#aktIndex].kep,
                this.lista[this.#aktIndex].cim,
                this.nagyElem);
        });

        this.jobbElem.addEventListener("click",()=>{
            console.log(this.#aktIndex);
            this.#aktIndex++;
            this.#aktIndex > this.lista.length-1 ? (this.#aktIndex=0) : (this.#aktIndex=this.#aktIndex);
            const NAGYKEP=new KiemeltKep(
                this.lista[this.#aktIndex].kep,
                this.lista[this.#aktIndex].cim,
                this.nagyElem);
        });
    }
}
