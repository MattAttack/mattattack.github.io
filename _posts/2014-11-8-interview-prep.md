---
layout: post
title:  "Interviewing: Tips, Resources & Questions to Know"
date:   2014-11-08 17:13:21
categories: interviews
published: True
---

Resources
---------

The following are great resources for brushing up on interview concepts and perparing for your interviews:

+ [Big O Cheat Sheet](http://bigocheatsheet.com/)
+ [Cracking the Code Interview](http://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X)
+ [Career Cup](http://www.careercup.com/)
+ [Top Coder](http://www.topcoder.com/)
+ [Glassdoor](http://www.glassdoor.com/index.htm)


Tips
----

+ Think out loud and through a solution before writing it
+ Write the naive solution first. Then think of how to optimize.
+ Understand time and space tradeoffs.
+ If you've heard a question before, tell your interviewer.


5 Common Questions
-----------------

Here are 5 general questions that test different concepts. A lot of companies use these questions.

**Sets:** Duplicates in an Array
======================

**Problem:** Write a function that takes an array A and returns True if there are any duplicates in the array and False if every element is unique.

**O(n) Solution:**

```python
def duplicates(A):
    seen = set()

    for a in A:
        if a in seen:
            return True
        seen.add(ch)

    return False
```

**Constant Space Solution:** If limited by extra space it is possible to sort the array in place and then iterate through the array.

```python
def duplicates(A):
    """Determines if an array has all unique characters using a set."""
    A = sorted(A)

    for i in range(len(A) - 1):
        if A[i] == A[i+1]: return False

    return True
```

<br>

* * *

<br>

**Map:** Anagrams
=================

**Problem:** Write a function that takes takes two strings and returns a boolean indicating whether or noth the two strings are anagrams.

**Naive Solution:**

```python
def anagrams(s1, s2):
    """Detects whether two strings are anagrams.

    :type s1: string
    :param s1: the first string
    :type s2: string
    :param s2: the first string
    :rtype: bool
    :returns: whether or not the two strings are anagrams
    """
    return "".join(sorted(s1)) == "".join(sorted(s2))
```

**Using Maps:**

```python
def anagrams(s1, s2):
    """Detects whether two strings are anagrams in O(n) time using a set

    :type s1: string
    :param s1: the first string
    :type s2: string
    :param s2: the first string
    :rtype: bool
    :returns: whether or not the two strings are anagrams
    """
    # chr -> count mapping
    letter_counts = dict()

    # Count up the letters seen in the first string
    for ch in s1:
        letter_counts[ch] = (
            letter_counts[ch] + 1 if ch in letter_counts.keys() else 1
        )

    # Verify letter counts match in the second string
    for ch in s2:
        if ch in letter_counts.keys():
            letter_counts[ch] = letter_counts[ch] - 1
        else:
            return False

    # Verify all the letter counts are back to zero
    for ch in letter_counts.keys():
        if letter_counts[ch] != 0:
            return False

    return True
```

<br>

* * *

<br>

**Trees & Recursion:** Min and Max Depth
========================================

**Node Implementation:**

```python
class Node(object):
    """A very basic implementation of a binary tree node"""

    def __init__(self, right=None, left=None, value=None):
        self.right = right
        self.left = left
        self.value = value
```

**Problem:** Implement a function called is_balanced to check if a tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one.

**Solution:**

```python
def is_balanced(root):
    """Takes a tree (root node) and returns whether or not that tree
    is balanced

    :type root: Node
    :param root: the root node of the tree
    :rtype: bool
    :returns: whether or not the tree is balanced
    """
    root_min_and_max_depth = min_and_max_depth(root)
    return root_min_and_max_depth[1] - root_min_and_max_depth[0] <= 1


def min_and_max_depth(node):
    """Takes a node and returns the min and max depth between that node
    and any of its children.

    :type node: Node
    :param node: a tree node with children
    :rtype: tuple(int, int)
    :returns: the (min, max) depth corresponding to that node
    """
    if not node:
        return (0, 0)

    left_min_and_max_depth = min_and_max_depth(node.left)
    right_min_and_max_depth = min_and_max_depth(node.right)

    return (
        min(left_min_and_max_depth[0], right_min_and_max_depth[0]) + 1,
        max(left_min_and_max_depth[1], right_min_and_max_depth[1]) + 1
    )
```

<br>

* * *

<br>

Linkedlist: Reverse a LinkedList
================================

**Implementation:**

```python
class Node(object):
    """A very basic implementation of a binary tree node"""

    def __init__(self, value=None, next=None):
        self.value = value
        self.next = next
```

**Problem:** Given the head of a LinkedList reverse it.

**Iterative Solution:**

```python
def reverse(n):
    """Reverses a LinkedList iteratively"""
    last = None
    current = n

    while current:
        # Grad the next node and make the current node
        # point backwards
        next = current.next
        current.next = last

        # Move forward
        last = current
        current = next

    # Return the new head (the last node)
    return last
```

**Recursive Solution:**

```python
def reverse(n, last=None):
    """Reverses a LinkedList recursively"""
    # Hit the end, return the last node
    if not n:
        return last

    # Grab the next node and reverse the pointer
    next = n.next
    n.next = last

    return reverse(next, n)
```



