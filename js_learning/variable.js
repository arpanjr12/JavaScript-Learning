const accountId=25485
let accountName="Arpan Das"
var accountpassword="123456"
accountCity="Kolkata"   //with out use anything we can set a variable and reserve the variable memory but it is not a good practice.....
let accountState;

// accountId=125489 // it is not allowed cause accountId is a Constant variable...
accountName="Riju Das"
accountpassword="789987"
accountCity="Mumbai"




// { this brackets are called by  scope}

 
/*
Prefer not to use var
cause of issue in block scope and functional scope
*/



// for run a single  variable then we use.....
console.log(accountId);


// for run multiple variable together then we use......
console.table([accountId,accountName,accountpassword,accountCity,accountState]);
 