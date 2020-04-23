/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var tou = new ListNode('')
  var temp = new ListNode('')
  tou.next = temp
  while(head){
      if(temp.val != head.val){
        temp.next = head
        temp = temp.next
      }if(!head.next && temp.val == head.val){
        temp.next = null
      }
      head = head.next
   }
   return tou.next.next
};

var deleteDuplicates1 = function(head) {
  var cur = head
  while(cur && cur.next){
    if(cur.val === cur.next.val){
      cur.next = cur.next.next
    }else {
      cur = cur.next
    }

  }
};

// 输入: 1->1->2->3->3
// 输出: 1->2->3
