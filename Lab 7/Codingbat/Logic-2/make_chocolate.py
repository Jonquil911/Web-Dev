def make_chocolate(small, big, goal):
    max_big_used = min(big, goal // 5)
    remaining = goal - (max_big_used * 5)

    if remaining <= small:
        return remaining
    return -1
