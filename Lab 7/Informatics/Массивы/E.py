n = int(input())
a = list(map(int,input().split()))
sign = False

for i in range(1, n):
    if a[i] < 0 and a[i-1] < 0:
        sign = True
        break
    elif a[i] > 0 and a[i-1] > 0:
        sign = True
        break

if sign:
    print("YES")
else:
    print("NO")