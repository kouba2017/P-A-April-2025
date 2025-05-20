//DLL : prev next
// Tree : BST Binary Search Tree 
// Node: left right 

class Node{
    constructor(val){
        this.data=val;
        this.left=null; 
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    //INSERT
    // BST is empty : assign root=newNode
    // position.data>val (newNode data)
    // moving it left or right is empty 
    // if it is empty the node is the leaf , insert again
    insert(val, newPosition=this.root){
        let newNode=new Node(val);
        //The empty check
        if(newPosition==null){
            this.root=newNode // break condition Recursion
            return this
        }
        // Comparison
        if (newPosition.data>val){
            if(newPosition.left!==null){
                this.insert(val,newPosition.left)
            }else{
                //This newPosition is a leaf 
                newPosition.left=newNode;
            }
        }else{
            if(newPosition.right!==null){
                this.insert(val,newPosition.right)
            }else{
                //This newPosition is a leaf 
                newPosition.right=newNode;
            }
        }
        return this
    }
    search(val, newPosition=this.root,depth=1){
        //BST Empty
        //Recursion Point
        if(newPosition==null){
            console.log("There is no such a data");
            return false
        }
        if(newPosition.data==val){
            console.log("We found it, the depth of the Node, "+depth);
            return true
        }
        if(newPosition.data>val){
            return this.search(val, newPosition.left,depth+1);
        }
        //Guard on If
        this.search(val,newPosition.right,depth+1);
    }
}
bst1=new BST()
bst1.insert(10)
bst1.insert(45)
bst1.insert(2)
bst1.insert(14)
bst1.insert(5)
bst1.insert(202)
console.log(bst1);
bst1.search(14);
bst1.search(60);

