---
title: "N Queen Problem"
date: "2022-08-15"
description: "The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other. "
language: "Python"
categories: ["python", "backtracking"]
---

# N Queen Problem

The idea is to place queens one by one in different columns, starting from the leftmost column. When we place a queen in a column, we check for clashes with already placed queens. In the current column, if we find a row for which there is no clash, we mark this row and column as part of the solution. If we do not find such a row due to clashes, then we backtrack and return false.

```python
from pprint import pprint
from copy import deepcopy


N = 4
board = [['-' for _ in range(N)] for _ in range(N)]
sol = []
sol_col = []
col = ['-' for _ in range(N)]


def this_pos_is_safe(r, c):
    # Checking for same column position
    for i in range(r):
        if board[i][c] == "Q":
            return False

    # Checking for "\" diagonal
    (i, j) = (r, c)
    while i >= 0 and j >= 0:
        if board[i][j] == "Q":
            return False
        i -= 1
        j -= 1

    # Checking for "/" diagonal
    (i, j) = (r, c)
    while i >= 0 and j <= N - 1:
        if board[i][j] == "Q":
            return False
        i -= 1
        j += 1

    return True


def n_queen(r):
    # If it is out of boards row then all queens are safe
    if r == N:
        sol.append(deepcopy(board))
        sol_col.append(deepcopy(col))
        return sol

    # Looping for columns and checking if position is safe.
    # If it is safe then add Q in it. Remove the queen when backtracking
    for c in range(N):
        if this_pos_is_safe(r, c):
            board[r][c] = "Q"
            col[r] = c + 1
            n_queen(r + 1)
            board[r][c] = "-"


n_queen(0)
pprint(sol)
pprint(sol_col)
```
