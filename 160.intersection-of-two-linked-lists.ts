/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
//     toString(){
//         return `${this.val} -> ${this.next}`
//     }
// }


function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

    let visitedNodes = new Set<ListNode>()

    let pointer1 = headA
    while (pointer1 != null) {
        if(visitedNodes.has(pointer1))
            continue
        visitedNodes.add(pointer1)
        pointer1 = pointer1.next
    }

    let pointer2 = headB
    while (pointer2 != null) {
        if (visitedNodes.has(pointer2))
            return pointer2

        pointer2 = pointer2.next
    }

    return null

};
// @lc code=end

const headA = new ListNode(4)
const a1 = new ListNode(1)
headA.next = a1


const headB = new ListNode(5)
const b6 = new ListNode(6)
const b1 = new ListNode(1)

headB.next = b6
b6.next = b1

const intersection = new ListNode(8)
const int4 = new ListNode(4)
const int5 = new ListNode(5)
intersection.next = int4
int4.next = int5

a1.next = intersection
b1.next = intersection

console.log(headA.toString())
console.log(headB.toString())

const result = getIntersectionNode(headA, headB)
console.log(result?.toString())