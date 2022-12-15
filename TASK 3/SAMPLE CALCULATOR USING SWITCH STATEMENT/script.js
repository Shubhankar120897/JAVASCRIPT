
// 1.Simple calculator using switch statement

console.log();
let a = +prompt("Enter your  first number");
let b = +prompt("Enter your  second number");

 let operator=prompt(`Choose the operation to perform:
        +  addtion
        -  substraction
        *  multiplication
        /  divistion
        %  mod
        **  power`);
             switch(operator)
        {
        case '+':
        console.log("Addition of the two Numbers is:  "+ (a+b));

        break;
        case '-':
        console.log("Substraction of the two Numbers is:  "+ (a-b));

        break;
        case '*':
        console.log("Multiplication of the two Numbers is:  "+ (a*b));

        break;
        case '/':
        console.log("Division of the two Numbers is:  "+ (a/b));

        break;
        case '%':
        console.log("Remainder of the two Numbers is:  "+ (a%b));

        break;
        case '**':
        console.log("Power of the two Numbers is:   "+ (a**b));

        break;
        default:
        console.log("Please Enter a Valid Input");
        }