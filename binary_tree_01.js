////////////// CLASSES /////////////////
class BinaryNode{

    left;
    right;
    value;

    constructor(nodeValue,leftNode, rightNode){
        this.left = leftNode;
        this.right = rightNode;
        this.value = nodeValue;
    }

    insert(value){       
        if(this.value === value)
            return;

        if(value < this.value){
            if(this.left === undefined)
                this.left = new BinaryNode(value,undefined,undefined);
            else
                this.left.insert(value);

        } else {

            if(this.right === undefined)
                this.right = new BinaryNode(value,undefined,undefined);
            else
                this.right.insert(value);

        }
    }

    /// Retrieves the BinaryNode containing the given value or undefined if not present.
    get(value){
        if(this.value === value)
            return this;

        if(value < this.value){
            if(this.left === undefined)
                return undefined;
            else
                return this.left.get(value);
        } else {
            if(this.right === undefined)
                return undefined;
            else
                return this.right.get(value);
        }
    }

    /*
        Returns the node's values using Inorder traversal in @outArray.
    */
    inOrder(outArray){
        if(this.left != undefined)
            this.left.inOrder(outArray);
        
        outArray.push(this.value);

        if(this.right != undefined)
            this.right.inOrder(outArray);
    }
    
    /*
        Returns the node's values using Preorder traversal in @outArray.
    */
    preOrder(outArray){
        outArray.push(this.value);

        if(this.left != undefined)
            this.left.inOrder(outArray);
        
        if(this.right != undefined)
            this.right.inOrder(outArray);        
    }

    /*
        Returns the node's values using Postorder traversal in @outArray.
    */
    postOrder(outArray){
        if(this.left != undefined)
            this.left.inOrder(outArray);
        
        if(this.right != undefined)
            this.right.inOrder(outArray);

        outArray.push(this.value);
    }
/*
    lHeight(){
        return this.left.height();
    }

    rHeight(){
        return this.right.height();
    }

    height(){
        if(this.left === undefined && this.right === undefined)
            return 0;
    
        let rh=0;
        let lh=0;

        if(this.left != undefined)
            lh = this.left.height();

        if(this.right != undefined)
            rh = this.right.height();

         return 1 + (lh > rh? lh: rh);
    }
*/

}

export {BinaryNode};

///////// PROGRAM ////////////

let bt = new BinaryNode(100,undefined,undefined);

bt.insert(20);
bt.insert(101);
bt.insert(1);
bt.insert(30);
bt.insert(21);
bt.insert(50);
bt.insert(1);
bt.insert(20);
bt.insert(19);
bt.insert(111);
//bt.insert(6);
//bt.insert(17);
//bt.insert(13);


let arrInOrder = new Array();
let arrPreOrder = new Array();
let arrPostOrder = new Array();

bt.inOrder(arrInOrder);
bt.preOrder(arrPreOrder);
bt.postOrder(arrPostOrder);

console.log("Inorder:",arrInOrder);
console.log("Preorder:",arrPreOrder);
console.log("Postorder:",arrPostOrder);

console.log("Node 111:",bt.get(111).value);
console.log("Node 100:",bt.get(100).value);
console.log("Node 200:",bt.get(200));

/*
console.log("H:",bt.height());
console.log("LH:",bt.lHeight());
console.log("RH:",bt.rHeight());
*/