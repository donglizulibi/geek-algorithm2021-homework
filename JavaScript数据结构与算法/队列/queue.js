// 数组的第0项是队列的头，最后一项是队列的尾，入列是在最后添加，出列是在队头拿出
/*
    enqueue 入列
    dequeue 出列
    front 查看队列头
*/
var Queue = function() {
    var items = []
        // 入列
    this.enqueue = function(element) {
        items.push(element)
    }

    // 出列
    this.dequeue = function() {
        return items.shift() // 删除并拿到数组的第一项
    }

    //查看队列头
    this.front = function() {
        return items[0]
    }

    // 检查栈是否为空
    this.isEmpty = function() {
        return items.length ? false : true
    }

    // 获取栈的长度
    this.size = function() {
        return items.length
    }

    // 把items的情况返回出去
    this.getItems = function() {
        return items
    }
}