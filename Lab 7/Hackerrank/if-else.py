n = int(input().strip())
if n % 2 != 0:
    print("Weird")
elif n <= 5 and n >= 2:
    print("Not Weird")
elif n >= 6 and n <= 20:
    print("Weird")
elif n > 20:
    print("Not Weird")