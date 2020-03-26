class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
        this.prior = null
    }
}
class DoubleList {
    constructor(array, boolean = true) {
        this.boolean = boolean
        let node, prior
        // 将this.list,node,prior同时指向头结点
        if (boolean) {
            // 存在头结点，存入长度
            node = prior = this.list = new ListNode(array.length)
        } else {
            // 不存在头结点，插入空头结点
            node = prior = this.list = new ListNode()
        }
        // 插入后续结点
        array.forEach(element => {
            node.next = new ListNode(element)
            node = node.next
            node.prior = prior
            prior = prior.next
        });
        // 判断是否存在头结点后返回结果
        this.list = boolean ? this.list : this.list.next
    }
    // 获得链表尾部
    get tail(){
        let temp = this.list
        while(temp.next){
            temp = temp.next
        }
        return temp
    }
    // 获取双链表长度
    get length() {
        // 如果存在头结点，直接读取头结点val值
        if (this.boolean) return this.list.val
        // 不存在头结点，遍历求长
        let i = 0
        let temp = this.list
        while (temp) {
            i++
            temp = temp.next
        }
        return i
    }
    // 移除结点
    remove(index){
        let temp = this.boolean ? this.list.next : this.list
        let i = 0
        // temp 为前驱结点指针
        while (temp && i < index - 1) {
            temp = temp.next
            i++
        }
        temp.next = temp.next.next
        temp.next.prior = temp
        if (this.boolean) this.list.val -= 1
        return this.list
    }
    // 插入结点，后插
    insert(index,val){
        let temp = this.boolean ? this.list.next : this.list
        let node = new ListNode(val)
        let i = 0
        // temp 为前驱结点指针
        while (temp && i < index - 1) {
            temp = temp.next
            i++
        }
        // 修改思路
        // temp -> node -> temp.next
        // temp <- node <- temp.next
        node.next = temp.next
        temp.next.prior = node
        node.prior = temp
        temp.next = node
        if (this.boolean) this.list.val += 1
        return this.list
    }
    // 根据val查找结点,如果有多个相同的val值，只会返回第一个
    // 如果找到了对应结点，则返回对应结点；如果没有找到则返回 undefined
    vfind(val){
        let temp = this.boolean ? this.list.next : this.list
        while (temp) {
            if (temp.val == val) return temp
            temp = temp.next
        }
        return undefined
    }
    // 根据key查找结点
    // 如果找到了对应结点，则返回对应结点；如果没有找到则返回 undefined
    kfind(index){
        let temp = this.boolean ? this.list.next : this.list
        let i = 0
        while (temp && index !== i) {
            i++
            temp = temp.next
        }
        return temp
    }
}
export default DoubleList