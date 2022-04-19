class MinHeap {
    constructor() {
        // This is all we need to start our heap
        // We need null at 0 so our math works out
        this.heap = [null];
    }

    size() {
        return this.heap.length - 1;
    }

    top() {
        // if(this.size() > 0){
        //     return this.heap[1];
        // } else {
        //     return null;
        // }

        return this.size() > 0 ? this.heap[1] : null; 
    }

    // Insert value
    insert(num) {
        this.heap.push(num);
        this.shiftUp();
        return this.size();
    }

    shiftUp() {
        // let's keep track of where our value is
        var idxOfValue = this.heap.length - 1;
        // Good to track if we have encountered idx 0 or are close to it
        while(idxOfValue > 1) {
            // We need to look at the parent
            var parentIdx = Math.floor(idxOfValue/2);
            // And ask "are you larger than me?"
            if(this.heap[idxOfValue] < this.heap[parentIdx]) {
                // If it is, we do a swap
                var temp = this.heap[idxOfValue];
                this.heap[idxOfValue] = this.heap[parentIdx];
                this.heap[parentIdx] = temp;
                // We need to update the idxOfValue now
                idxOfValue = parentIdx;
            } else {
                // If it's not, we break out
                break;
            }
        }
    }
    extractTop() {
        if (this.size == 0) {
            return null
        } else {
            this.heap.splice(1,1)
        }
        return this.heap
    }
    shiftDown() {
        this.heap.splice(1, 0, this.heap[this.heap.length - 1])
        this.heap.splice((this.heap.length -1), 1)
        let parent = 1
        let firstChild = parent * 2
        let secondChild = (parent * 2) + 1
        while (this.heap[parent] > this.heap[firstChild] || this.heap[parent] > this.heap[secondChild]) {
            if (this.heap[parent] > this.heap[firstChild]) {
                [this.heap[parent], this.heap[firstChild]] = [this.heap[firstChild], this.heap[parent]]
                parent = firstChild
            }
            if (this.heap[parent] > this.heap[secondChild]) {
                [this.heap[parent], this.heap[secondChild]] = [this.heap[secondChild], this.heap[parent]]
                parent = secondChild
            }
        }
        return this.heap
    }
}

var myHeap = new MinHeap();
console.log(myHeap.size());
myHeap.insert(8);
myHeap.insert(3);
myHeap.insert(9);
myHeap.insert(1);
console.log(myHeap.size());
console.log(myHeap.heap);
console.log("HERE", myHeap.extractTop())
console.log(myHeap.shiftDown())