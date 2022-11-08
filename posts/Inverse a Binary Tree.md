---
title: "Inverse a Binary Tree"
date: "2022-10-29"
description: "Inversing a Binary Tree which is defined as a Tree data structure with at most 2 children."
language: "Python"
categories: ["python", "tree"]
---

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def preorder_traversal(root):
    if root is None:
        return []
    return [root.val] + preorder_traversal(root.left) + preorder_traversal(root.right)


arr = [4, 2, 7, 1, 3, 6, 9]

root = TreeNode(4)
root.left = TreeNode(2, TreeNode(1), TreeNode(3))
root.right = TreeNode(7, TreeNode(6), TreeNode(9))

print(preorder_traversal(root))


def inverse_binary_tree(root):
    if root is None:
        return None
    root.right, root.left = inverse_binary_tree(
        root.left), inverse_binary_tree(root.right)
    return root


inverse_binary_tree(root)

print(preorder_traversal(root))

```
