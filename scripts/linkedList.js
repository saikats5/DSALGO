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
}
