import {BinaryNode} from './binary_tree01.js'

////////////// CLASSES //////////////////
class AvlBinaryNode extends BinaryNode{

    lHeight(node){
        if(node === undefined)
            node = this;

        return this.height(node.left);
    }

    rHeight(node){
        if(node === undefined)
            node = this;

        return this.height(node.right);
    }

    height(node){
        
        if(node === undefined)
            node = this;
        
        if(node.left === undefined && node.right === undefined)
            return 0;
    
        let rh=0;
        let lh=0;

        if(node.left != undefined)
            lh = this.height(node.left);

        if(node.right != undefined)
            rh = this.height(node.right);

         return 1 + (lh > rh? lh: rh);
    }
}


///////// PROGRAM ////////////

let bt = new AvlBinaryNode(100,undefined,undefined);

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
bt.insert(6);
bt.insert(17);
bt.insert(13);


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

console.log("H:",bt.height());
console.log("LH:",bt.lHeight());
console.log("RH:",bt.rHeight());