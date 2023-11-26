'''
Q2: Write a program in python program to find the sum of odd and even numbers from 1 to N.
    Problem Description
    The program takes the number N and finds the sum of odd and even numbers from 1 to N.
'''
N = int(input("Enter Value of N: "))
sumEven = 0
sumOdd = 0

for i in range(1, N+1):
    if i % 2 == 0:
        sumEven = sumEven + i
    else:
        sumOdd = sumOdd + i

print("Sum of even numbers from 1 to N:",sumEven)
print("Sum of odd numbers from 1 to N:",sumOdd)
    
