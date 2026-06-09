const accountId = 144553
let accountEmail = "shub@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed


accountEmail = "hc@hs.com"
accountPassword = "21121323"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

/*
prefer not to use var because of issue in block scope and funcitonal scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])