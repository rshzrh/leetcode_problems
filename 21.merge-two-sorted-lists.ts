/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 **/

/*
 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const result = new ListNode(-200)
    

    if(list1 === null && list2 === null){
        
        return null
    }
        
    if(list1 != null && list2 === null){
        
        return list1
    }
    if(list2 != null && list1 === null){
        
        return list2
    }

    if(list1?.val < list2?.val){
        
        
        list1.next = mergeTwoLists(list1?.next, list2)
        return list1

        
    }else{
        
        
        list2.next = mergeTwoLists(list1, list2?.next)
        return list2
    }

};

// @lc code=end

