---
title: "Bellman–Ford Algorithm"
date: "2022-09-17"
description: "The Bellman–Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph."
language: "python"
categories: ["python", "graph"]
---

Given a graph and a source vertex src in the graph, find the shortest paths from src to all vertices in the given graph. The graph may contain negative weight edges.

```python
# (vertex, cost)
import itertools
inf = 1000
nums = 7
graph = {1: [(2, 6), (3, 5), (4, 5)],
         2: [(5, -1)],
         3: [(2, -2), (5, 1)],
         4: [(3, -2), (6, -1)],
         5: [(7, 3)],
         6: [(7, 3)],
         7: [], }

graph = {1: [(2, 4), (4, 5)],
         2: [],
         3: [(2, -10)],
         4: [(3, 3)], }

cost_arr = [inf for _ in range(nums + 1)]
cost_arr[1] = 0

for _, (j, value) in itertools.product(range(nums), graph.items()):
    for k, cost_edge in value:
        # relaxation
        cost_arr[k] = min(cost_arr[k], cost_arr[j] + cost_edge)

print(cost_arr[1:])
```
