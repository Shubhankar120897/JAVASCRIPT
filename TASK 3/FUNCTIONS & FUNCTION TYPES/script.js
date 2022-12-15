// 1)Normal/Regular function
//        // 1)Function without parameters

//     //    eg.1)
//     // function  message(){
//     //     console.log("Hello world");
//     // }
//     // message();

//     //  // eg.2)
//     //  function add(){
//     //      let a=100,b=200;
//     //      console.log("addtion of two number is:" +(a+b));
//     //  }
//     //  add();

//     // //  eg.3)
//     // function mult(){
//     //     let x=15,y=100;
//     //     console.log("multiplication of two number is:"+(x*y));
//     // }
//     // mult();

//     // // eg.4)
//     //   function sub(){
//     //       let num1=Number(prompt("Enter the first number"));
//     //       let num2=Number(prompt("Enter the second number"));
//     //       console.log("Substraction of two number is:"+(num1-num2));
//     //   }
//     //   sub();
//     //   sub();

//       eg.5)
//     function div(){
//         let num1=+(prompt("Enter  the first number"));
//         let num2=+(prompt("Enter the second number"));
//         console.log("Divistion of Two number is:"+(num1/num2));
//     }
//     div();

//     //   ----------------------------------------------------------------------------------

//      // 2  function with parameters
//     //  eg .1
//     //  function message(msg){
//     //      console.log("Print the message:"+(msg));
//     //  }
//     //  message("hello world");

//     //  eg.2
//     // function add(num1,num2){
//     //     console.log("Addtion of two number is: "+(num1+num2));
//     // }
//     // add(50,100);
//     //  eg.3
//     //   function sub(num1,num2){
//     //    console.log("Substraction of two number is:" +(num1-num2));
//     //   }
//     //    div(50,100);

//     //  eg.4
//     // function multi(a,b){
//     //     console.log("Multiplication of two number is: "+(a*b));
//     // }
//     // multi(400,420);
    
//     //  eg.5
//     // function div(num1,num2){
//     //     console.log("Divistion of two number is:" +(num1/num2));
//     // }
//     // div(50,5);

// // ---------------------------------------------------------------------------------------
// // // 3  Default parameters 
// // // 1.Without parameters
// //     function  defaultfun(){
// //        let msg="hello world";
// //        console.log("Print the message :" +msg);
// //     }
// //     defaultfun();

// //     2.With parameters 
// //     function  default_add(a,b=20){
// //         console.log(`Print addtion of default parameter: ${a+b}`);
// //      }
// //      default_add(10);
 
// // -----------------------------------------------------------------------------------

// // 4.) 1)Function without parameters  with return statement<br>
// // function  parameters with return statement

// // eg .1
// // function message(){
// //     let msg=prompt("enter the message");
// //     return msg;
// // }
// // console.log("print the message:" +(message()));
// //   eg .2
// // function add(){
// //     let num1=10,num2=20;
// //     return num1+num2; 
// // }
// // let sum=add();
// // console.log("Addtion of Two number is:"+(sum));


// //   eg .3
// // function multi(num1,num2){
// //     return num1*num2; 
// // }
// // let multiplication=multi(550,10);
// // console.log("Multiplication two number is:" +(multiplication));

// // eg 4
// // function sub(a,b){
// //     return a-b; 
// // }
// // console.log("Substraction two number is:" +(sub(500,100)));


// // eg 5
// // function div(){
// //     let num1=+(prompt("enter the first number"));
// //     let num2=+(prompt("enter the second number"));
// //     return num1/num2;
// // }
// // console.log("Divistion of two number is:"+(div()));

// // ----------------------------------------------------------------------------

// // *************************
// // ANONYMOUS FUNCTION (function Expression)

// // eg 1
// //   const message =function(){
// //       let msg="hello world";
// //       console.log("print the message:"+msg);
// //   }
// //   message();

// //  eg2
// //   const add= function(){
// //     let num1=50,num2=20;
// //     return num1+num2;
// // }
// // console.log("Addtion of Two number is:"+(add()));

// //  eg 3
// // const  multi= function(){
// //     let num1=+(prompt("enter the first number"));
// //     let num2=+(prompt("enter the second number"));
// //     return num1*num2;
// // }
// // console.log("multiplication of Two number is:"+(multi()));

// // eg 4
// // const  div= function(a,b){
// //     return a/b;
// // }
// // let Divistion=div(50,10);
// // console.log("Divistion of Two number is:"+(Divistion));


// // eg 5
// // const  sub= function(a,b){
// //     return a-b;
// // }
// // console.log(`Substraction of Two number is:${sub(300,150)}`);

// // -----------------------------------------------------------------------

// // ARROW FUNCTION 
// // 1)Parameterized arrow function 

// // eg 1

// // const sum =(a,b)=>{
// //  console.log("Addtion of two number is:" +(a+b));
// // };
// // sum(200,500);

// // 2)Non-Parameterized arrow function 
// // const sub =() => {
// //    let num1=+(prompt("enter the number"));
// //    let num2=+(prompt("enter the second number"));
// //    console.log("Substraction of Two number is:"+(num1-num2));
// // };
// // sub();

// // 3)Arrow function(with parameters and return statement)
// // const multi = (a,b) =>{
// //   return a*b;
// // }
// // let multiplication=multi(100,10);
// // console.log(`Multiplication of two number is:${multiplication}`);

// // 4)Arrow function(without curly braces)
// // const message =(msg) => console.log("Print the message:"+(msg));
// // message("hello world");

//    5)Arrow function(without parenthesis)
// // const print_msg =msg => console.log("Print the message:"+(msg));
// // print_msg("How are you");


// // -------------------------------------------------------------

// // 2)Immediately involed function Expression

// 1.Example
// ((msg)=>{
//  console.log("print the msg:"+(msg));
//  })("Hello word!");

// //2.Example
//  //((a,b)=>console.log("Mutiplication of two number is:"+(a*b)))(10,10);

// //3.Example
//  //((studentrollno)=>{
//  // let rollno=25;
//  // console.log("Roll number of student is:"+rollno);
//  //})();
 
// //4.Example
//    //((studentname)=>{
//    // console.log(`student name is:${studentname}`);
//    //})("siya");

//  5.Example
//      //(()=>{ 
//     // let courseName="MERN STACK";
//    //console.log(`Course name is:${courseName}`);
// // })();
// // -------------------------------------------------------------