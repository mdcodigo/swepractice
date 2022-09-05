////////////// CLASSES /////////////////
class HashedTable{

    constructor(capacity){
        this.#arr = new Array(capacity);
        this.#buckets = capacity;
    }

    #arr;
    #buckets;

    insert(key, value){
        let hc = this.getHashValue(key);

        if(this.#arr[hc] === undefined)
            this.#arr[hc] = new Array();

        this.#arr[hc][this.#arr.length]= { "k": key, "v": value};
        //console.log(this.#arr[hc][this.#arr.length].k);
    }

    get(key){
        let hc = this.getHashValue(key);

        if(this.#arr[hc] === undefined)
            return undefined;

        let auxArr = this.#arr[hc];
        //console.log(auxArr);

        for(let i=0; i < auxArr.length; i++){
            //console.log(auxArr[i]);
            if(auxArr[i] != undefined && auxArr[i].k == key)
                return auxArr[i].v;
        }

        return undefined;
    }

    getHashValue(key){
        return key % this.#buckets;
    }

}

///////// PROGRAM ////////////

let ht = new HashedTable(10);

ht.insert(10,"Hola Mundo 10");
ht.insert(2,"Hola Perres 2");
ht.insert(4,"Hola Amigos 4");
ht.insert(8,"Hola Compadres 8");

console.log(ht.get(10));
console.log(ht.get(2));
console.log(ht.get(4));
console.log(ht.get(8));