class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root == null;
    }
    min(){
        var runner = this.root;
        while (runner.left != null) {
            runner = runner.left;
        }
    }
    containsIterative(val){
        var present = false;
        var runner = this.root;
        while(runner != null){
            console.log(runner.value);
            if(runner.value == val){
                present=true;
                break
            }
            if(val > runner.value){
                runner = runner.right;
            }
            else{runner = runner.left
            };
        }
        console.log(present);
        return present;
    }
}