---
title: "Depth First Search"
date: "2023-03-15"
description: "Depth-first search is an algorithm for traversing or searching tree or graph data structures."
language: "python"
categories: ["python", "tree"]
---

Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.

```python
# Tree
def dfs(root):
    if root is None:
        return None
    print(root.val)
    return dfs(root.right) and dfs(root.left)
```

```python
#Graph
def dfs(graph, start, visited):
    visited.add(start)
    print(start, visited)

    for next_node in graph[start] - visited:
        dfs(graph, next_node, visited)


graph = {
    '0': {'1', '2'},
    '1': {'0', '3', '4'},
    '2': {'0'},
    '3': {'1'},
    '4': {'2', '3'},
}

dfs(graph, '0', set())
```
