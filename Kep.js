export default class Kep{
    #elUt;
    #cim; /*privát adattag*/
    constructor(elUt,cim, szulElem){
        this.#elUt=elUt;
        this.#cim=cim;
        this.szulElem=szulElem;
        this.megjelenit()
    }
    megjelenit(){
        let html=`
                <div class="kep">
                    <h3>${this.#cim}</h3>
                    <img src="${this.#elUt}" alt="${this.#cim}">
                </div>`
        this.szulElem.innerHTML+=html;
    }
}