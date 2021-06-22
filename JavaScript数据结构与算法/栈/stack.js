// 数组的第一项是栈底，最后一项是栈顶


/*
    函数除了是函数，还可以是构造器    
*/
var Stack = function() {
    var items = [] // 私有变量
        // this.items = []  // 公有变量
        // push 栈顶添加元素
    this.push = function(element) {
            // this.items.push(element)
            items.push(element)
        }
        // 移除栈顶元素  
    this.pop = function() {
            return items.pop() // js的pop方法移除数组最后一个元素 往后可能要用到被移除出栈的那个元素，所以加一个return
        }
        // 查看栈顶元素
    this.peek = function() {
            return items[items.length - 1] //查看数组的最后一项
        }
        // 检查栈是否为空
    this.isEmpty = function() {
            return items.length ? false : true
        }
        // 移除全部元素
    this.clear = function() {
            // for(let i = items.length-1; i >= 0;i--){
            //     items.pop()
            // }
            items = []
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




// pop 栈顶移除元素
// peek 查看栈顶
// isEmpty 检查栈是否为空
// clear 移除全部元素
// size 获取栈的长度