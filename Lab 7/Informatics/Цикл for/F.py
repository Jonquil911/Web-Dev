x = int(input())

length = len(str(x))

ans = ""

for i in range(length):
    digit = x % 10
    if ans == "" and digit == 0:
        x = x // 10
        continue
    ans += str(digit)
    x = x//10

print(ans)