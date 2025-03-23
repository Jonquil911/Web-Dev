n = int(input())

ans = 0

length = len(str(n))

deg = 0

for i in range(length):
    digit = n % 10
    ans += digit * 2**deg
    deg += 1
    n = n//10

print(ans)