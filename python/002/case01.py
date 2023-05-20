from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(
            self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        print(l1)
        # for i in l1:
        #     print('--i', i)


list_node_1 = ListNode(2, 4)
print(list_node_1.next)
list_node_2 = ListNode([5, 6, 4])
solution = Solution()

print(solution.addTwoNumbers(list_node_1, list_node_2))
