1. 20
2. 20
3. 20
4. ReferenceError: result is not defined. Because the scope of 'result' is within the if block. 'result' does not have function scope, it has block scope, menaing when the if block ends the variable no longer exists.
5. TypeError: Assignment to constant variable. Because the code is attempting to reassign the value of a constant, it throws a type error. Constants are immutable.
6. If the code could run to line 13, it would still throw an error becvause the variable is out of scope. Similar to number 4, constants declared with 'const' only have block scope, not function scope.
