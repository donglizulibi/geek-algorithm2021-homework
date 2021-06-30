var LinkedList = function() {
    var head = null // 链表头 链表的第一个元素 先设为null
    var length = 0 // 链表不是用数组来实现，所以其长度需要手动计算
        // 辅助类：节点
    var Node = function(element) {
        this.element = element
        this.next = null
    }

    /*
    append(element) 尾部添加元素
    分两种情况
    1 如果链表为空 则需要把追加进链表的元素设为 head 并且是链表长度++
    2 链表不为空 不断使current等于下一个node的next，如果
    */
    this.append = function(element) {
        var node = new Node(element)
            /*
                此时的node为 node = {
                    element: element
                    next: null
                }
            */
            // 本质上就是在链表的两种情况之下，分别在什么样的时机中把新建的node加进去
        if (head == null) {
            head = node // 由于 链表结构反映在代码上就是对象嵌套对象，所以head就是最外层的那个对象
        } else {
            var current = head
            while (current.next) {
                current = current.next
            }
            // while循环执行完之后，表示current已经到了链表的最后一项
            current.next = node // current.next是null不代表要把node覆盖current
        }
        length++
    }


    /*
    insert(position,element) 插入元素 
    分两种情况
    1 从链表的第0项插入元素
    2 从链表中间插入元素
    */
    this.insert = function(position, element) {
        if (position > -1 && position < length) { // 防止position越界
            var node = new Node(element) // 创建一个新的节点
            if (position == 0) { // 要把元素插入到链表第一个的情况 
                var current = head // 把未插入前的链表的第一项保存下来 此时链表的第二项被两个next指向
                head = node // 把创建好的元素赋予给链表头部
                head.next = current // 把新的链表头部的next指向之前存好的现在已经变成第二项的元素
            } else {
                // 初始化三个数据
                var index = 0
                var current = head
                var previous = null
                    // 找到要插入的那个位置
                while (index < position) {
                    previous = current
                    current = current.next
                    index++
                }
                // 插入新元素
                previous.next = node
                node.next = current
            }
            length++
        }

    }

    /*
    removeAt(position) 从链表中特定位置移除一项 （根据元素位置移除）
    1.移除链表首位元素
    2.移除其他位置元素
    */
    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            if (position == 0) {
                var current = head
                head = current.next
            } else {
                var index = 0
                var current = head
                var previous = null
                while (index < position) {
                    previous = current
                    current = current.next
                    index++
                }
                previous.next = current.next
                    /*
                    本来previous的next是current，而current的next是current.next
                    现在让previous.next = current.next
                    就相当于跳过current，也就是删掉了这一项
                    */
            }
            length--
            return current
        }
        return null
    }

    /*
    indexOf(element) 获取元素索引
    */
    this.indexOf = function(element) {
        var current = head
        var index = 0
        while (current) {
            if (current.element = element) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    /*
        remove(element) 从链表中移除一项 (根据元素内容移除)
    */
    this.remove = function(element) {
        return this.removeAt(this.indexOf(element))
    }

    /*
    检查链表是否为空
    */
    this.isEmpty = function() {
        // return head == null?false:true
        return length == 0
    }

    /*
    返回链表长度
    */
    this.size = function() {
        return length
    }

    this.getHead = function() {
        return head
    }
}


/*
    链表操作
    append(element) 尾部添加元素
    insert(position,element) 插入元素 
    indexOf(element) 获取元素索引
    remove(element) 从链表中移除一项 (根据元素内容移除)
    removeAt(position) 从链表中特定位置移除一项 （根据元素位置移除）
*/




// var LinkedList = function() {
//     var length = 0
//     var head = null
//     var Node = function(element) {
//         this.next = null
//         this.element = element
//     }

//     this.append = function(element) {
//         var node = new Node(element)
//         if (head == null) {
//             head = node
//         } else {
//             var current = head
//             while (current.next) {
//                 current = current.next
//             }
//             current.next = node
//         }
//         length++
//     }
//     this.getHead = function () {
//         return head
//     }
// }