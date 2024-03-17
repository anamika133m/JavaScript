const accountId = 14453
let accountEmail = "anamika@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 12367 // not allowed

accountPassword = "121212"
accountEmail = "am@am.com";
accountCity = "Bengaluru"

// console.log(accountId)
// console.log(accountPassword)
// console.log(accountEmail)
// console.log(accountCity)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use Var
beacuse of issues in bloack scope and functional scope 
*/