import math

a = int(input())
b = int(input())
angle = round(math.degrees(math.atan(a / b)))
print(str(angle) + "°")
