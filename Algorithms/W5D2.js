// nodes and singly linked lists (SLL)

class ListNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

let x = new ListNode(7);

let y = new ListNode(3);

let z = new ListNode(4);

x.next = y;
y.next = z;

z.next = new ListNode(8);

z.next.next = new ListNode(2);
z.next.next.next = new ListNode(6);

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead(value) {
        var new_node = new ListNode(value);
        if (this.head == null && this.tail == null) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    display() {
        let output = "";
        let runner = this.head;
        while (runner != null) {
            output += runner.value + " - ";
            runner = runner.next;
        }
        console.log(output);
    }
    addToTail(value) {
        var new_node = new ListNode(value);
        if (this.head == null && this.tail == null) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }
    contains(value) {
        let runner = this.head;
        while (runner != null) {
            if (runner.value == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    removeFront() {
        this.head = this.head.next;
    }
    removeBack() {
        let runner = this.head;
        while (runner != null) {
            if (runner.next == this.tail) {
                this.tail = runner
                runner.next = null
            }
            runner = runner.next;
        }
    }
    average() {
        var runner = this.head;
        var output = 0
        var counter = 0
        while (runner != null) {
            output += runner.value
            counter++
            runner = runner.next
        }
    }
}

var new_sll = new SinglyLinkedList();

new_sll.addToHead(8);
new_sll.addToHead(4);
new_sll.addToHead(6);
new_sll.display(); // 6 - 3 - 8
new_sll.addToTail(4);
new_sll.display(); // 6 - 3 - 8 - 4
new_sll.addToTail(7); // 6 - 3 - 8 - 4 - 7
new_sll.display();
new_sll.removeFront();
new_sll.display();
new_sll.removeBack();
new_sll.display();
new_sll.average();

// console.log(new_sll.contains(4)); // true
// console.log(new_sll.contains(6)); // true
// console.log(new_sll.contains(7)); // true
// console.log(new_sll.contains(11)); // false
