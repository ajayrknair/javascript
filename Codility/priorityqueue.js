function PriorityQueue() {
    this.data = []
}

PriorityQueue.prototype.push = function(element, priority) {
    priority = +priority
    for (var i = 0; i < this.data.length && this.data[i][1] > priority; i++);
    this.data.splice(i, 0, [element, priority])
}

PriorityQueue.prototype.pop = function() {
    return this.data.shift()[0]
}

PriorityQueue.prototype.size = function() {
    return this.data.length
}


// Example Usage:

var queue = new PriorityQueue()

queue.push('high', 9)
queue.push('low', 1)
queue.push('medium-low', 3)
queue.push('medium', 5)
queue.push('medium-high', 4)

console.log(queue);