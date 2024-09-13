
/*alweys compare two thing in same datatype.... 
not different datatype...
like:- string comapre with another string and 
int comapre with another int 
dont't compare a string with a int or a int with a string*/


console.log(null>0);
console.log(null==0);
console.log(null>=0);

/*
the reason is that an equality check == and comparisons > < >= <= work differently
comparisons convert null to a number,treating it as 0.
that's why(3) null>=0 is true and(1) null>0 is false
*/


console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<0);



// === it not only check values but also check datatype......
console.log("2"===2);