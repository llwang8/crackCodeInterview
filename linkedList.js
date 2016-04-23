//Cracking Coding Interview

/*
_________________________________________________________________
2.1 Write code to remove duplicates from an unsorted linked list FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
_________________________________________________________________
*/
function LinkedListNode(value){
    this.value = value;
    this.next = null;
}

function SinglyList(){
    this.length = 0;
    this.head = null;
}
var a = new LinkedListNode('a');
var b = new LinkedListNode('b');
var c = new LinkedListNode('c');
var d = new LinkedListNode('d');
var e = new LinkedListNode('e');
a.next = b;
b.next = c;
c.next = d;
d.next = e;

var theLinkedList = new SinglyList();
theLinkedList.head = a;
theLinkedList.length = 5;

theLinkedList.prototype.removeDuplicateUsingObject(){
    var previousNode, currentNode, valHash = {};
    if (!this.head){
        return "Linked list is empty";
    }
    if (this.length == 1){
        return "No duplicate for a single node list.";
    }
    previousNode = this.head;
    currentNode = this.head;
    while(currentNode.next){
        if (valHash[currentNode.value]){
            previousNode = currentNode.next;
            return currentNode;
        }else {
            valHash[currentNode.value] = 1;
            previousNode = currentNode;
            currentNode = currentNode.next;

        }
    }
    return "No duplicate found.";
}


/*
________________________________________________________________pg 105
2.2 Implement an algorithm to find the nth to last element of a singly linked list
_________________________________________________________________
*/
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function findNthToLast(n, head){
    var listLength = 1;
    var currentNode = head;

    while(currentNode.next){
        currentNode = currentNode.next;
        listLength++;
    }
    for (var i=0; i<listLength-n; i++){
        currentNode = currentNode.next;
    }
    return currentNode;
}

functio findNthToLastStickMethod(n, head){
    var leftNode = head,
        rightNode = head;
    for (var i=0; i<n; i++){
        rightNode = rightNode.next;
    }
    while (rightNode.next){
        leftNode = leftNode.next;
        rightNode = rightNode.next;
    }
    return leftNode;
}


/*________________________________________________________________pg 106
2.3 Implement an algorithm to delete a node in the middle of a single linked list,
given only access to that node
EXAMPLE
Input: the node ‘c’ from the linked list a->b->c->d->e
Result: nothing is returned, but the new linked list looks like a->b->d->e
_________________________________________________________________
*/

function LinkedListNode(value){
    this.value = value;
    this.next = null;
}

function SinglyList(){
    this.length = 0;
    this.head = null;
}


SinglyList.prototype.deleteNode = function(val){
    var currentNode = this.head,
        beforeNode = this.head;

    if (!this.head){
        return "Linked list is empty.";
    }
    if (this.head.value == val){
        beforeNode = this.head.next;
        this.head = this.head.next;
        this.length --;
        return currentNode;
    }
    while (currentNode.next){
        if (currentNode.value == val){
            beforeNode.next = currentNode.next;
            this.length--;
            return currentNode;
            //return this;
        }
        beforeNode = currentNode;
        currentNode = currentNode.next;
    }
    return ("No such node with " + val);
}

var a = new LinkedListNode('a');
var b = new LinkedListNode('b');
var c = new LinkedListNode('c');
var d = new LinkedListNode('d');
var e = new LinkedListNode('e');
a.next = b;
b.next = c;
c.next = d;
d.next = e;

var theLinkedList = new SinglyList();
theLinkedList.head = a;
theLinkedList.length = 5;
console.log(theLinkedList.length);
theLinkedList.deleteNode('c');

SinglyList.prototype.addNode = function(input){
    var node, currentNode = this.head,
        node = new LinkedListNode(val),

    if (!currentNode){
        this.head = node;
        this.length++;
    }
    while (currentNode.next){
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return node;
}

theLinkedList.addNode(b);
theLinkedList.addNode(c);
theLinkedList.addNode(d);
theLinkedList.addNode(e);
console.log(theLinkedList);

//console.log(theLinkedList.head.next);

theLinkedList.deleteNode('c');

/*
________________________________________________________________pg 107
2.4 You have two numbers represented by a linked list, where each node contains a
single digit. The digits are stored in reverse order, such that the 1’s digit is
at the head of the list Write a function that adds the two numbers and returns the
sum as a linked list
EXAMPLE
Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
Output: 8 -> 0 -> 8
_________________________________________________________________
*/
function sumOfTwoNumInLists(list1, list2){
    var sum = 0, count = 0, currentNode1, currentNode2;
    currentNode1 = list1.head;
    currentNode2 = list2.head;
    if(!list1.head || !list2.head){
        return "At least one listed list is empty.";
    }
    if (!list1.head.next){

    }
    while (currentNode1.next && currentNode2.next){
        sum += (currentNode1.value + currentNode2.value) * Math.pow(10, count);
        currentNode1 = currentNode1.next;
        currentNode2 = currentNode2.next;
        count++;
    }
    while (currentNode1.next){
        sum += (currentNode1.value) * Math.pow(10, count);
        currentNode1 = currentNode1.next;
        count++;
    }
    while (currentNode2.next){
        sum += sum += (currentNode2.value) * Math.pow(10, count);
        currentNode2 = currentNode2.next;
        count ++;
    }
    return sum;
}



/*
________________________________________________________________pg 108
2.5 Given a circular linked list, implement an algorithm which returns node at the
begin- ning of the loop
DEFINITION
Circular linked list: A (corrupt) linked list in which a node’s next pointer points
to an earlier node, so as to make a loop in the linked list
EXAMPLE
input: A -> B -> C -> D -> E -> C [the same C as earlier]
output: C
_________________________________________________________________
*/




/*
---------------------------------------------------------------
Write a func­tion to reverse a singly linked list.
*/
function reverseSingleLinkedList(head){
    var previousNode = head;
    var currentNode = head;

    if (!head){
        return "Empty list.";
    }
    if(!head.next){
        return head;
    }
    while (currentNode){
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    return previousNode;

}



/*
---------------------------------------------------------------
Write a func­tion to deter­mine if a singly linked list is a palindrome.
Input : A linked list
Out­put : Boolean (true or false)
*/
function  isSinglyLinkedListPalindrome(list){
    if (!list.head){
        throw new Error "Empty list.";
    }
    if(!list.head.next){
        return true;
    }
    return list == reverseSingleLinkedList(list) ? true : false;
}



/*
---------------------------------------------------------------
Write code to par­ti­tion a linked list around a value val, such that all nodes less than val come before all nodes greater than or equal to val.

Input : A linked list
Out­put : A linked list
*/

function partitionLinkedList(list, val){
    if (!list.head){
        throw new Error "Empty list.";
    }
    if(!list.head.next){
        return list;
    }
    var currentNode = list.head;
    var beforeValList, afterValList, equalValList, currentNodeBeforeValList;

    while (currentNode){
        if (currentNode.value < val){
            currentNodeBeforeValList = beforeValList.addNode(currentNode.val);
        }else if (currentNode.value >= val){
            afterValList.addNode(currentNode.val);
        }
    }
    currentNodeBeforeValList.next = afterValList.head;
    return beforeValList;
}



/*
---------------------------------------------------------------



