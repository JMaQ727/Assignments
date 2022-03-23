class MinHeap {
    constructor() {
        this.heap = [null]
    }

    insert(value) {
        this.heap.push(value)
        let parent = Math.floor((this.heap.length - 1) / 2)
        while (this.heap[this.heap.length - 1] < this.heap[parent]) {
            [this.heap[this.heap.length - 1], this.heap[parent]] = [this.heap[parent], this.heap[this.heap.length - 1]]
            parent = Math.floor((this.heap.length - 1) / 2)
        }
        return this.heap
    }
    remove() {
        [this.heap[this.heap.length - 1], this.heap[1]] = [this.heap[1], this.heap[this.heap.length - 1]]
        this.heap.pop()
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



let heap1 = new MinHeap();
console.log(heap1.insert(23))
console.log(heap1.insert(44))
console.log(heap1.insert(60))
console.log(heap1.insert(35))
console.log(heap1.insert(5))
console.log(heap1.remove())