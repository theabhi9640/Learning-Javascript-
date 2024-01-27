const accountId = 1445
let accountEmail = "yadavabhishek6660@gmail.com"
var accountPassword = "abhi1234"
accountCity = "Etawah"

//accountId = 2 not allowed

accountEmail = "abc@123.com"
accountCity = "Ghaziabad"
accountPassword = "2121212122"
let accountState;

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
