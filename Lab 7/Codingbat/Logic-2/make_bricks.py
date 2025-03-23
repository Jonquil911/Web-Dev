def make_bricks(small, big, goal):
    return goal % 5 <= small and goal - min(big, goal // 5) * 5 <= small
