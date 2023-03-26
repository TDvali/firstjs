let userLoggedIn = true
let viedoIsCommentable = true

const userCanComment = viedoIsCommentable && userLoggedIn 


console.log(userCanComment) 


let userIsLoggedIn = true 
let userIsBlocked = true 

const userCanPost = userIsLoggedIn && userIsBlocked

console.log(userCanPost)

let balance = 25;
let userCartTotal = 18.5;

const paymentComplete = balance >= userCartTotal 

console.log(paymentComplete)

let userIsAdmin = true
let userIsModerator = false 
let userIsCommentAuthor = false 

const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor 

console.log(userCanDelete)

let presidentKey = true
let primeMinisterKey = true
let generalOfArmy = true
let masterKey = false

const bombWillLaunch = presidentKey && primeMinisterKey && generalOfArmy || masterKey

console.log(bombWillLaunch)




