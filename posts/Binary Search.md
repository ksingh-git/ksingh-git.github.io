---
title: "Binary Search"
date: "2022-10-16"
description: "Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half"
language: "Python"
categories: ["python", "search"]
---

# Binary Search

Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

```python
nums = [5, 7, 7, 8, 8, 10]
target = 8

def binarysearch(nums, target):
    l = 0
    h = len(nums)-1
    while (l <= h):
        mid = int((h + l)/2)
        if nums[mid] == target:
            return mid
        elif nums[mid] > target:
            h = mid - 1
        else:
            l = mid + 1
    return -1

print(binarysearch(nums, target))

```
