---
title: "Breath First Search"
date: "2023-03-15"
description: "BFS"
language: "Breadth-first search is an algorithm for searching a tree or graph data structures."
categories: ["python", "tree"]
---

BFS, or Breadth-First Search, is a node method for obtaining the graph's shortest path. It makes use of a queue data structure with FIFO (first in, first out) ordering
Breadth-first search is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level.

```python
def bfs(root):
    if root is None:
        print("None")
    if root.left is None and root.right is None:
        return
    if root.left is not None:
        print(root.left.val)
    else:
        print("None")
    if root.right is not None:
        print(root.right.val)
    else:
        print("None")
    if root.left is not None:
        bfs(root.left)
    if root.right is not None:
        bfs(root.right)
```
