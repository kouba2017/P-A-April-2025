///DLL(Doubly Linked List)
// Nodes
class Node{
    constructor(val){
        this.next=null;
        this.prev=null;
        this.data=val;
    }
}
class DLL{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    //IsEmpty
    isEmpty(){
        return this.head==null?true:false;
    }
    //Push 
    push(val){
        let newNode=new Node(val);
        if (this.isEmpty()){
            this.head=newNode;
            this.tail=newNode;

        }else{
            newNode.prev=this.tail;
            this.tail.next=newNode;
            this.tail=this.tail.next;
        }
    }
    forwardTraversal(){
        if(!this.isEmpty()){
            let pointer=this.head;
            while(pointer!=null){
                console.log(pointer.data);
                pointer=pointer.next;
                
            }
        }else{
            console.log(null);
            
        }
    }
    //Recursion
    forwardTraversalRecursive(){
        //break point 
        if (this.isEmpty()){
            return
        }else{
            console.log(this.head.data);
            this.head=this.head.next;
            this.forwardTraversalRecursive()
        }
    }
}



dll1=new DLL();
dll1.push(4);
dll1.push(7);
dll1.push(17);
console.log(dll1);
dll1.forwardTraversal();
dll1.forwardTraversalRecursive();


//Rursiv 
// def
// break point / base cdt
// recursive call
//CHRONO
function doSomething(n) {
    if(n==0){
        console.log("TASK COMPLETED!",n);

        return
    }
    console.log("Still TIME",n);
    doSomething(n-1);
}
// n=5
doSomething(5);

//Factorial n!=1*1*2*3*4*....*n-1*n
// 0!=1
function factorialRecursive(num){
    if(num==0) return 1
    let factorial=num*factorialRecursive(num-1)
    console.log(factorial);
    
    return factorial
}
console.log(factorialRecursive(5));

