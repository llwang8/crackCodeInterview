//Cracking Coding Interview
//stacks and queues

/*
_________________________________________________________________
3.1 Describe how you could use a single array to implement three stacks
_________________________________________________________________
*/

function StacksInSingleArray(){
    this.stacksTopIndex = [0,0,0];
    this.data = [];
}
StacksInSingleArray.prototype.push(val, numStack){
    var index = this.stacksTopIndex[numStack-1];
    this.data.splice(index, 0, val);
    for (var i=numStack-1; i<this.stacksTopIndex.length; i++){
        this.stacksTopIndex[i]++;
    }
}
StacksInSingleArray.prototype.pop(numStack){
   var index = this.stacksTopIndex[numStack-1]
   var popItem = this.data.splice(index, 1);
   for (var i=numStack-1; i<this.stacksTopIndex.length; i++){
        this.stacksTopIndex[i]--;
   }
   return popItem;
}

/*
________________________________________________________________pg 111
3.2 How would you design a stack which, in addition to push and pop, also has
a function min which returns the minimum element? Push, pop and min should all
operate in O(1) time
_________________________________________________________________
*/

function Stack(){
    this.items = [];
}

Stack.prototype.pop = function(){
    if (!this.items) return null;
    return this.items.pop();

}

Stack.prototype.push = function(val){
    this.items.push(val);
}

Stack.prototype.peek = function(){
    if (this.items.length){
        return this.items[this.items.length-1];
    }
}

function MinStack(){
    this.stack = new Stack();
    this.minsStack = new Stack();
}

MinsStack.prototype.push = function(val){
    this.stack.push(val);
    if (!this.minsStack || val < this.minStack.peek()){
        this.minStack.push(val);
    }
    return val;
}

MinStack.prototype.pop = function(){
    var item = this.minStack.pop();
    if (item === this.minStack.peek()){
        this.minStack.pop();
    }
    return item;
}

MinStack.prototype.getMin = function(){
    return this.minStack.peek();
}
/*________________________________________________________________pg 113
3.3 Imagine a (literal) stack of plates If the stack gets too high, it might
topple Therefore, in real life, we would likely start a new stack when the
previous stack exceeds some threshold. Implement a data structure SetOfStacks
that mimics this. SetOfStacks should be composed of several stacks, and should
create a new stack once the previous one exceeds capacity. SetOfStacks push() and
SetOfStacks pop() should behave identically to a single stack (that is, pop()
should return the same values as it would if there were just a single stack)
FOLLOW UP
Implement a function popAt(int index) which performs a pop operation on a
specific sub-stack
_________________________________________________________________
*/

function SetOfStacks(cap){
    this.capacity = cap;
    this.items = [];

}

SetOfStacks.prototype.push(){
    var size = this.items[items.length-1].length;

    if (size == this.capacity){
        this.items.push(new Stack());
        this.items[this.items.length-1].push();
    }else {
        this.items[this.items.length-1].push();
    }
}

SetOfStacks.prototype.pop(){
    if (this.items){
        return this.items[this.items.length-1].pop();
    }
}



/*________________________________________________________________pg 115
3.4 In the classic problem of the Towers of Hanoi, you have 3 rods and N disks
of different sizes which can slide onto any tower. The puzzle starts with disks sorted in
ascending order of size from top to bottom (e g , each disk sits on top of an even larger one)
You have the following constraints:
(A) Only one disk can be moved at a time
(B) A disk is slide to the top of one rod onto the next rod
(C) A disk can only be placed on top of a larger disk
Write a program to move the disks from the first rod to the last using Stacks
_________________________________________________________________
*/
function TowersOfHanoi(n){
    this.source = new Stack();
    this.dest = new Stack();
    this.aux = new Stack();
}
TowersOfHanoi.prototype.move = function(n, source, dest, aux){
    if (n == 2){
        this.aux.push(this.source.pop());
        this.dest.push(this.source.pop());
        this.dest.push(this.aux.pop());
    }
    move(n-1, source, dest, aux));
}



/*
________________________________________________________________pg 118
3.5 Implement a MyQueue class which uses two stacks
_________________________________________________________________
*/
//Method 1 (By making enQueue operation costly)
function MyQueue1 (){
    this.inStack = new Stack();
    this.shuffleStack = new Stack();
    this.deQueue = function(){
        if (this.inStack){
            return this.inStack.pop();
        }
        throw new Error("Empty queue.");
    };
    this.enQueue = function(val){
        while (this.inStack){
            this.shuffleStack.push(this.inStack.pop());
        }
        this.inStack.push(val);
        while (this.shuffleStack){
            this.inStack.push(this.shuffleStack.pop());
        }
    };
}


//Method 2 (By making deQueue operation costly)
function MyQuenue2(){
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.enQueue = function(val){
        this.inStack.push(val);
    };
    this.deQueue = function(){
        while (this.inStack){
            this.outStack.push(this.inStack.pop());
        }
        this.outStack.pop();
    };
}

/*
________________________________________________________________pg 120
3.6 Write a program to sort a stack in ascending order You should not make any
assumptions about how the stack is implemented The following are the only
functions that should be used to write this program: push | pop | peek | isEmpty
_________________________________________________________________
*/

function Stack(){
    this.items = [];
}

Stack.prototype.pop = function(){
    if (!this.items) return null;
    return this.items.pop();

}

Stack.prototype.push = function(val){
    this.items.push(val);
}

Stack.prototype.peek = function(){
    if (this.items.length){
        return this.items[this.items.length-1];
    }
}

Stack.prototype.isEmpty = functon(){
    return (this.items.length) ? true : false;
}

Stack.protype.sortAsc(){
    var this.sortedStack = new Stack();

    while(!this.isEmpty()){
        var temp = this.pop();
        while (this.sortedStack && this.sortedStack.peek() > temp){
            this.push(this.sortedStack.pop());
        }
        this.sortedStack.push(temp);
    }
    return this.sortedStack.items;
}



/*



