/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let listNode1 = new ListNode(-1)
  let listNode = listNode1
  while (l1 != null && l2 != null) {
    if(l1.val <= l2.val){
      listNode.next = l1
      l1 = l1.next
    }else {
      listNode.next = l2
      l2 = l2.next
    }
    listNode = listNode.next
  }
  listNode.next = l1 == null ? l2 : l1
  return listNode1.next
};
//总结 对于链表不熟悉 导致时间花费太多 用时 （50分钟）【总结5分钟】【自己做30分钟】【看答案 15分钟】
/***
  以后做链表的时候 可以先声明一个链表的头部 然后在赋值一个 这样就有一个移动的指针
  循环的时候只要判断 传入的参数是否为 null 不用调用.next
  直接判断新出创建的节点的.next = 当前的 传入接点
  这次判断完了 就可以 进行下一个节点
  返回的时候从头部的下一个节点返回
*/
