// 优先队列
// 这个队列是一个数组，里面包含了很多对象，对象里面有一个键值对是描述该对象的优先级



var PriorityQueue = function() {
    var items = []

    // 构造一个辅助类 把enqueue传入的参数变成一个对象
    var QueueItem = function(element, priority) {
        this.element = element
        this.priority = priority
    }

    // 进入队列
    this.enqueue = function(element, priority) {
        var priorityqueue = new QueueItem(element, priority)
        var bool = false
        for (let i = 0; i < items.length; i++) {
            if (priorityqueue.priority > items[i].priority) {
                items.splice(i, 0, priorityqueue)
                bool = true
                break
            }
        }
        if (!bool) {
            items.push(priorityqueue)
        }
    }

    // 查看队列
    this.getItems = function() {
        return items
    }
}