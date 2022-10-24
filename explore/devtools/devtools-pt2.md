1. The bug was that because num1 and num2 are both strings, the result was the string concatenation of the two numbers and not the result of their summation.
2. I would use the Number() type conversion to ensure that the number entered is being added and non-number values are behing accepted and handled as NaN.
