a = int(input())
b = int(input())

for k in range(b + 1):
    if k**2 <= b and k**2 >= a:
        print(k**2)