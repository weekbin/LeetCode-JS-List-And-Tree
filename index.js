class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class SingleList {
    constructor(array, boolean = true) {
        this.boolean = boolean
        let node
        if (boolean) {
            // 如果存在头结点，插入头结点
            node = this.list = new ListNode(array.length)
        } else {
            // 如果不存在头结点，插入空结点
            node = this.list = new ListNode()
        }
        // 以此插入后续结点
        array.forEach(element => {
            node.next = new ListNode(element)
            node = node.next
        });
        // 如果不存在头结点，去除头结点
        this.list = boolean ? this.list : this.list.next
    }
    // 获取单链表长度
    get length() {
        let i = 0
        let temp = this.list
        while (temp) {
            i++
            temp = temp.next
        }
        //去除头结点后返回长度
        if (this.boolean) return i - 1
        return i
    }
    // 插入结点,前驱插入，eg:要插入在最后，index = list.length
    insert(index, val) {
        let temp = this.boolean ? this.list.next : this.list
        let node = new ListNode(val)
        let current = this.kfind(index)
        let i = 0
        while (temp && i < index-1) {
            temp = temp.next
            i++
        }
        temp.next = node
        node.next = current
        return this.list
    }
    // 移除结点
    remove(index) {
        let temp = this.boolean ? this.list.next : this.list
        let next = this.kfind(index).next
        let i = 0
        while (temp && i < index-1) {
            temp = temp.next
            i++
        }
        temp.next = next
        return this.list
    }
    // 找到某个结点的前一个结点
    findPrior(index) {
        let temp = this.boolean ? this.list.next : this.list
        let i = 0
        while (temp && i < index-1) {
            temp = temp.next
            i++
        }
        return i > 0 ? temp : undefined
    }
    // 根据val查找结点,如果有多个相同的val值，只会返回第一个
    // 如果找到了对应结点，则返回对应结点；如果没有找到则返回 undefined
    vfind(val) {
        let temp = this.boolean ? this.list.next : this.list
        while (temp) {
            if (temp.val == val) return temp
            temp = temp.next
        }
        return undefined
    }
    // 根据key查找结点
    // 如果找到了对应结点，则返回对应结点；如果没有找到则返回 undefined
    kfind(index) {
        let temp = this.boolean ? this.list.next : this.list
        let i = 0
        while (temp && index !== i) {
            i++
            temp = temp.next
        }
        return temp
    }
}

let my_list = new SingleList([1, 2, 3])
