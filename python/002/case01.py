# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

from typing import Optional
from list_note import ListNode

TODO: ListNode

class Solution:
    def addTwoNumbers(
        self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        print(l1)
        for i in l1:
            print('--i', i)


soulution = Solution()

print(soulution.addTwoNumbers(l1=[2, 4, 3], l2=[5, 6, 4]))
