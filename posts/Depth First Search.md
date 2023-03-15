---
title: "Depth First Search"
date: "2023-03-15"
description: "Depth-first search is an algorithm for traversing or searching tree or graph data structures."
language: "python"
categories: ["python", "tree"]
---

Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.

```python
def dfs(root):
    if root is None:
        return None
    print(root.val)
    return dfs(root.right) and dfs(root.left)
```
