//Pointer=> @memory
// sequences=> block->block / object->objects
//Data Structure : array=> [var1,var2]: Static Linear DS
// Larger data=> axe-> 100 data structure
//Single Linked List (SLL)
//

// SLL
//String 
// class SLL 
// 
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SLL{
    constructor(head=null){
        this.head=head;
    }
    empty(){
        return this.head==null?true:false;
    }
    //push, pop/remove,empty
    push(val){
        let newNode=new Node(val);
        if(this.head==null){
            this.head=newNode;
            return
        }else{
            let pointer=this.head;
            while(pointer.next!=null){
                //moving forward
                pointer=pointer.next;
            }
            pointer.next=newNode;
            return
        }
    }
    pop(){
        if(this.empty()){
            return null;
        }else if(!this.head.next){
            //temp => temporary /flag=> boolean true false  
            let temp= this.head.val;
            this.head=null;
            //pop method return the value I am removing
            return temp;
        }else{
            let pointer=this.head;
            while(pointer.next.next!=null){
                pointer=pointer.next;
            }
            let temp =pointer.next.val;
            pointer.next=null;
            return temp;
        }
    }
}
node1=new Node(10)
sll1=new SLL(node1)
console.log(sll1);
sll1.push(12);
sll1.push(2);
console.log(sll1);
sll1.pop();
console.log(sll1);
