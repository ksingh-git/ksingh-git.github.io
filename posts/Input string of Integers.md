---
title: "Input string of integers"
date: "2019-09-16"
description: "Input a string of integers into a list of integers."
language: "Python"
categories: ["python"]
---

# Main python

1st way :

```python
import sys
def get_ints(): return map(int, sys.stdin.readline().strip().split())

a,b,c,d = get_ints()
```

2nd way :

```python
a = list(map(int,input("nEnter the numbers : ").strip().split()))[:n]
```
