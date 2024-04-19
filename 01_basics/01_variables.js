const accountdId = 144553
let accountEmail = "tanima@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountdId = 2 //not allowed

accountEmail = "tanima@tanima.com"
accountPassword = "212121"
accountCity = "Bangaluru"

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountdId);
console.table([accountdId, accountEmail, accountPassword, accountCity, accountState]);