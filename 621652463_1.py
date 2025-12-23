weight = int(input("Enter weight: "))
height = float(input("Enter height(M): "))
bmi = weight/(height*height)

if bmi >= 35 :
    print("Obese")
elif bmi > 25 :
    print("Pre-obese")
elif bmi >= 18.5 :
    print("Normal")
else :
    print("Thiness")