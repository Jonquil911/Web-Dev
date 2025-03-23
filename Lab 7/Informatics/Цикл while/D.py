n = int(input())

k = 1

while k <= n:
    if n == k:
        print("YES")
        break
    elif k*2 > n:
        print("NO")
        break
    else:
        k *= 2
