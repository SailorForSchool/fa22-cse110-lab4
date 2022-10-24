1. The code will log the number 3. This is because 'i' was declared with function scope using the keyword 'var' and so it persists beyond the loop. At the end of the loop it has the value 3, given that there are three prices in the array, and so it is output with that value.

2. The code will log the value 150. This is because the discounted price variable also has function scope because it was declared with the keyword 'var'. The last value held in descounted price was (300 * 1 - .5) = 150.

3. The code will lof the value 150. This is again because finalPrice was declared using var and has function scope. The last value in finalPrice was (150 * 100 / 100) = 150.

4. [ 50, 100, 150 ], an array that contains all the values of finalPrices calculated from the original prices array.

5. ReferenceError: i is not defined. There will be an error because i is only defined within the scope of the for block using the let keyword. It does not persist beyond the for block.

6. ReferenceError: discountedPrice is not defined. discountedPrice is no longer defined because it was defined using the let keyword within the for black. The scope of the variable is block scope, therefore it does not persist.

7. This will log the valuye 150. finalPrice is defined within the scope of the function and is therefore still in scope when logged.

8. [ 50, 100, 150 ], an array containing all the values of finalPrice calculated from within the for block. This is because the value is copied before finalPrice is out of scope.

9. ReferenceError: i is not defined. This is because i is declared using the let keyword and is only in scope within the for block.

10. The code will log the value 3 because the length is a constant value defined at the top of the function and is in scope.

11. The function will return [ 50, 100, 150 ]. This is the values of the dicounted prices calculated within the for block. Although discountedPrice is considered a constant, because it is defined within the for block, it becomes out of scope at the end of every loop and a new constant with the same name is created for every value. This is why all the values are calculated and saved correctly.

12. 
- A. student.name
- B. student["Grad Year"]
- C. student.greeting()
- D. student["Favorite Teacher"].name
- E. student.courseLoad[0]

13. 
- A. '32', This is because the number is converted to its string representation and concatenated to the string '2'.
- B. 1, This is a numeric conversion because a mathematical operator '-' is being applied to a non-number. Because it is the string '3', it is converted tot he number 3.
- C. 3, This is because a numeric conversion occurs on null because of the mathematical operator '+'. The null becomes the number 0.
- D. '3null', This is a string conversion because the '+' operator is recognized as the concatenation operator and null is converted into a string, null -> 'null'.
- E. 4, This is because a numeric conversion happens to True --> 1 because of the mathematical operation.
- F. 0, This is a numeric conversion because the '+' is recognized as a mathematical operator. Flase is converted to 0 and so is null.
- G. '3undefined', This is a string conversion because the '+' operator is recognized as the concatenation operator and undefined is converted into a string, undefined -> 'undefined'.
- H. NaN, This is becauce the numeric conversion of undefined is NaN. Any math performed with NaN results in NaN.

14. 
- A. true, because the string is converted to a a number since values because numbers when comparing different types.
- B. false, because strings are compared each character at a time and is considered greater by unicode order.
- C. true, because the string is converted to a number (see 14A)
- D. false, because the '===' operator is the strict equality operator and immediately returns false if the operands are of different types.
- E. false, because when comparing different types values become numbers. The boolean value true is equal to 1 and is not equal to 2.
- F. true, because the Boolean() function causes a boolean conversion and any number other than 0 is evaluated to true.

15. The '==' operator checks equality with type conversion and the '===' operator does not convert the types before comparing. This emans that two different typed variables can be evaluated to true using '==' but CANNOT using '===='. If the two operands are of the same type, the two have the same behavior.

17. [ 2, 4, 6 ], This is because the function modifyArray takes in an array and a function. The function is performed on each part of the array and the new array created by the results is returned. Since the function "doSomething" multiplies a number by 2 and return the result, passing it in with an array of numbers results in a new array with each number multiplied by 2.

19. 
- 1
- 4
- 3
- 2
