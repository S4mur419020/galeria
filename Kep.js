export default class Kep{
    #elUt;
    #cim;
    #index; /*privát adattag*/
    constructor(elUt,cim,index, szulElem){
        this.#elUt=elUt;
        this.#cim=cim;
        this.#index=index;
        this.szulElem=szulElem;
        this.megjelenit()
        this.kepElem=document.querySelector(".kep:last-child");
        this.kepElem.addEventListener("click",()=>{
            console.log(this.#index);


            const e =new CustomEvent("Kivalaszt",{detail:this.#index})
            window.dispatchEvent(e)
        });
    }
    megjelenit(){
        let html=`
                <div class="kep">
                    <img src="${this.#elUt}" alt="${this.#cim}">
                </div>`
        this.szulElem.insertAdjacentHTML("beforeend", html);
    }
}