function Stack() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {

    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
        return null;
    }
    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) {
        return null;
    }
    return this.items[this.items.length -1];
};

var MaxStack = function () {
    Stack.call(this);
    this.maxArray = []
}

MaxStack.prototype = Object.create(Stack.prototype);

MaxStack.prototype.push = function (item) {
    this.items.push(item);
    if(this.maxArray.length === 0) {
        this.maxArray.push(item);
    } else {
        if(this.peek()>this.maxArray[this.maxArray.length - 1]) {
            this.maxArray.push(this.peek());
        }
    }
}

MaxStack.prototype.pop = function (item) {
    var popped = this.items.pop();
    if(popped === this.maxArray[this.maxArray.length - 1]) {
        this.maxArray.pop();
    }
}
MaxStack.prototype.getMax = function () {
    console.log(this.items);
    return this.maxArray[this.maxArray.length - 1];
}

var oStack = new MaxStack();
oStack.push(5);
oStack.push(1);
oStack.push(4);

oStack.pop();
oStack.push(6);

console.log(oStack.getMax());
