// Es6 里面有Set类 要避免使用这个关键字

var Set2 = function() {
    var items = {}
    var length = 0
        //has 检查元素是否存在 return boolean
    this.has = function(value) {
        return items.hasOwnProperty(value)
    }

    /*
    添加元素 集合内的元素是不重复的
    */
    this.add = function(value) {
        if (!this.has(value)) { // if里面的内容只有value不存在才会执行
            items[value] = value; // 属性名等于属性值
            length++
            return value;
        }
        return false;
    }

    /*
    移除元素 还是先判断集合中是否有这个属性
    */
    this.remove = function(value) {
        if (this.has(value)) {
            delete items[value];
            length--
            return true;
        }
        return false;
    }

    // 清空集合
    this.clear = function() {
        items = {}
    }

    // 获取集合长度
    this.size = function() {
        return length
            // 或者  return Object.keys(items).length
    }

    // 提取集合全部的值并以数组形式返回
    this.value = function() {
        var values = []
        for (var i in items) {
            if (items.hasOwnProperty(i)) {
                values.push(items[i])
            }
        }
        return values
    }

    // 两个集合实现并集 
    this.union = function(otherSet) {
        let resultSet = new Set2()

        // 1 把自己的值提取出来
        let arr = this.value()
        for (let i = 0; i < arr.length; i++) {
            resultSet.add(arr[i])
        }

        // 2 把另一只集合的值提取出来   add方法已经实现了去重功能
        let arr2 = otherSet.value()
        for (let i = 0; i < arr2.length; i++) {
            resultSet.add(arr2[i])
        }
        return resultSet
    }

    // 两个集合实现交集
    this.intersection = function(otherSet) {
        let resultSet = new Set2()
        let arr = this.value()
        let arr2 = otherSet.value()
            // let arr3 = []
        for (let i = 0; i < arr2.length; i++) {
            if (arr.includes(arr2[i])) { // 判断b数组中的某个元素是否是在a数组里面，如果在的话就加到函数里面
                resultSet.add(arr2[i])
            }
        }
        return resultSet
    }

    // 两个集合实现差集
    this.difference = function(otherSet) {
        let resultSet = new Set2()
        let arr = this.value()
        let arr2 = otherSet.value()
        for (let i = 0; i < arr2.length; i++) {
            if (!arr.includes(arr2[i])) { // 判断b数组中的某个元素是否是在a数组里面，如果不在的话就加到函数里面
                resultSet.add(arr2[i])
            }
        }
        return resultSet
    }


    // 检查items的情况
    this.getItems = function() {
        return items
    }
}

/*
    Set的操作
1. has 检查元素是否存在 返回布尔
2. 
3. 
*/

var a = new Set2()
a.add(1)
a.add(2)
a.add(3)

var b = new Set2()
b.add(3)
b.add(4)
b.add(5)

var c = a.union(b)