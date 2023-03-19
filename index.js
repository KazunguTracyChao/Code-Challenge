speed = int(input("Enter the speed of the car: "))
points = 0

if speed <= 70:
    print("Ok")
else:
    points = (speed - 70) // 5
    print("Points:", points)
    
    if points > 12:
        print("License suspended")

