import {TrieNode} from './trie_tree_01.js'

////////////// CLASSES //////////////////
class XfsTrieTree extends TrieNode{

    depthFirstSearch(sourceNode, destNode){

        let seenNodes = new Map();
        let stackNodes = new Array();
        let result = new Array();

        stackNodes.push(sourceNode);

        while(stackNodes.length != 0){

            let curNode = stackNodes.pop();

            if(!seenNodes.has(curNode.char)){
                seenNodes.set(curNode.char,curNode);
                result.push(curNode.char);
            }
            
            if(curNode.char === destNode.char)
                return result;

            curNode.map.forEach((value,key) => {
                if(!seenNodes.has(key)){
                    stackNodes.push(value);
                    this.#dfs(value,destNode,stackNodes,seenNodes,result);
                }
            });   
        }

        if(result[result.length-1] === destNode.char)               
            return result;
        else
            return [];
    }

    #dfs(sourceNode,destNode,stackNodes,seenNodes,result){

        stackNodes.push(sourceNode);

        while(stackNodes.length != 0){

            let curNode = stackNodes.pop();

            if(!seenNodes.has(curNode.char)){
                seenNodes.set(curNode.char,curNode);
                result.push(curNode.char);
            }

            if(curNode.char === destNode.char)
                return result;

            curNode.map.forEach((value,key) => {
                if(!seenNodes.has(key)){
                    stackNodes.push(value);
                    this.#dfs(value,destNode,stackNodes,seenNodes,result);
                }
            });
        }
    }

    breathFirstSearch(sourceNode, destNode){
        let seenNodes = new Map();
        let listNodes = new Array();

        listNodes.push(sourceNode);

        while(listNodes.length > 0){
            let curNode = listNodes.shift();

            if(!seenNodes.has(curNode.char))
                seenNodes.set(curNode.char,curNode);

            if(curNode.char === destNode.char){
                let result = new Array();

                seenNodes.forEach((v,k) =>{
                    result.push(k);
                });

                return result;
            }

            curNode.map.forEach((value,key) => {
                listNodes.push(value);
            });
        }
     
        return [];
    }
}


////////////// PROGRAM //////////////////
let graph = new XfsTrieTree();

graph.addWord("HELLO");
graph.addWord("HELL");
graph.addWord("GOODBYE");
graph.addWord("GOOD");
graph.addWord("HELICOPTER");
graph.addWord("GOD");
graph.addWord("GODNESS");
graph.addWord("TEST");

console.log("DFS(G,N):",graph.depthFirstSearch(graph.map.get('G'),new TrieNode('N')));
console.log("DFS(H,L):",graph.depthFirstSearch(graph.map.get('H'),new TrieNode('L')));
console.log("DFS(H,X):",graph.depthFirstSearch(graph.map.get('H'),new TrieNode('X')));

console.log("BFS(H,L):", graph.breathFirstSearch(graph.map.get('H'),new TrieNode('L')));
console.log("BFS(H,Z):", graph.breathFirstSearch(graph.map.get('H'),new TrieNode('Z')));