// Notes: The variables declared without var/let/const are global variables
// const variable => block scope , global scope, can't be redeclare and reassigned

const b = 2;
{
    const a = 1; 
}

function checkConst () {
    const c = 1;
    console.log(b) 
}


// var keyword => functional and global scope

var a = 1;
{
    a = 2;
    //console.log(a);
}

function checkVar () {
    var var_b = 9;
    // console.log(a);
}
// console.log("i am here",var_b); // var_b is not defined

// let keyword => block scope

let letA = 1;

if (letA == 1){
    let letB = 2
}

// console.log(letB); // letB is not defined

/* Related problems */

var a_test = 1;
var b_test = 2
a_test = b_test;
// console.log(a_test);   // 2
// console.log(b_test);   // 2

 // FIRST
 let a_first ;

 {
    var x = 1;
    console.log('inside block', x)
   }
   console.log('outside block', x)

   function z() {
    var m = 1;
    console.log('inside function',m)
   }
   
   z();
   
   console.log('outside function', m)

   // https://github.com/Chalarangelo/30-seconds-of-interviews/blob/master/questions/var-let-const.md 
   for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      // logs `10` ten times
      console.log(i)
    })
  }
