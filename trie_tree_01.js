////////////// CLASSES /////////////////
class TrieNode{

    map;
    isFinal;
    char;
    #rootChar = "*";
/*
    constructor(){
        this.map = new Map();
        this.isFinal = false;
        this.char = this.#rootChar;
    }
*/
    constructor(character){
        this.map = new Map();
        this.isFinal = false;

        if(character === undefined)
            this.char = this.#rootChar;
        else
            this.char = character;
    }

    addWord(word){
        if(word != undefined && word.length > 0){

            let currentNode = this.map.get(word.charAt(0));

             if(currentNode === undefined){
                currentNode = new TrieNode(word.charAt(0));
                this.map.set(word.charAt(0),currentNode);
            }

            if(word.length > 1)
                currentNode.addWord(word.substring(1));
            else
                currentNode.setFinal();
        }
    }

    setFinal(){
        this.isFinal = true;
    }

    /*
        Returns the node's values using Postorder traversal in @outArray.
    */
    postOrder(outArray){

            this.map.forEach(value => {
                value.postOrder(outArray);
            });            

            if(this.isFinal){
                outArray.push('|' + this.char);
            } else {
                outArray.push(this.char);
            }
    }

    isValidWord(word){
        if(word != undefined && word.length > 0){

            //console.log("CHAR:",word.charAt(0));
            let currentNode = this.map.get(word.charAt(0));

             if(currentNode === undefined){
                //console.log("UNK:",word.charAt(0));
                //WE DONT KNOW A WORD THAT CONTINUES WITH THE CURRENT CHAR SO IS INVALID!.
                return false
            } else if(word.length === 1) {
                //LAST CHAR SO LETS CHECK IF IS FINAL!!!
                //console.log(word.charAt(0)," ",currentNode.isFinal);
                return currentNode.isFinal;
            } else {
                //ITS NO LAST CHAR IN THE WORD SO LETS CONTINUE!.
                return currentNode.isValidWord(word.substring(1));
            }

        } else {
            return true;
        }
    }
}

export{TrieNode};

///////// PROGRAM ////////////

let trieTree = new TrieNode();


trieTree.addWord("HELLO");
trieTree.addWord("HELL");
trieTree.addWord("GOODBYE");
trieTree.addWord("GOOD");
trieTree.addWord("HELICOPTER");
trieTree.addWord("GOD");
trieTree.addWord("GODNESS");
trieTree.addWord("TEST");


let arr = new Array();
trieTree.postOrder(arr);

console.log("Postorder: ",arr);

console.log("VALID TESTS WORDS:")
console.log("Is GOOD valid?: ",trieTree.isValidWord("GOOD"));
console.log("Is GOD valid?: ",trieTree.isValidWord("GOD"));
console.log("Is GODNESS valid?: ",trieTree.isValidWord("GODNESS"));
console.log("Is GOODBYE valid?: ",trieTree.isValidWord("GOODBYE"));
console.log("Is TEST valid?: ",trieTree.isValidWord("TEST"));
console.log("Is HELL valid?: ",trieTree.isValidWord("HELL"));
console.log("Is HELICOPTER valid?: ",trieTree.isValidWord("HELICOPTER"));
console.log("Is HELLO valid?: ",trieTree.isValidWord("HELLO"));
console.log("Is '' valid?: ",trieTree.isValidWord(''));

console.log("INVALID WORDS TESTS:")
console.log("Is HELP valid?: ",trieTree.isValidWord("HELP"));
console.log("Is TESSERACT valid?: ",trieTree.isValidWord("TESSERACT"));
console.log("Is TESTX valid?: ",trieTree.isValidWord("TESTX"));
console.log("Is T35T valid?: ",trieTree.isValidWord("T35T"));