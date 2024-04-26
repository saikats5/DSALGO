class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
  }
  addFirst(data) {
    const node = new Node(data)
    node.next = this.head
    this.head = node
  }
  addLast(data) {
    const node = new Node(data)
    if (!this.head) {
      this.head = node
      return
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }
  size() {
    let count = 0
    let current = this.head
    while (current) {
      count++
      current = current.next
    }
    return count
  }
  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.log('ERROR')
      return
    }
    const node = new Node(data)
    if (index === 0) {
      node.next = this.head
      this.head = node
      return
    }
    let current = this.head
    for (let i = 0; i < index - 1; i++) {
      current = current.next
    }
    node.next = current.next
    current.next = node
  }
  removeTop() {
    if (!this.head) {
      return
    }
    this.head = this.head.next
  }
  removeLast() {
    if (!this.head) {
      return
    }
    let current = this.head
    while (current.next.next) {
      current = current.next
    }
    current.next = null
  }
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.log('ERROR')
      return
    }
    if (index === 0) {
      this.head = this.head.next
      return
    }
    let current = this.head
    for (let i = 0; i < index - 1; i++) {
      current = current.next
    }
    if (current.next) {
      current.next = current.next.next
    }
  }
  print() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}
const linkedlist = new LinkedList()
