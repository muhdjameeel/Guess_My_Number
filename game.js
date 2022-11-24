


var body = document.getElementsByTagName("body")

const again = document.querySelector("#again")

//let secretNumber = (document.querySelector(".number"))
const check = document.querySelector("#check")
const guess = Number (document.querySelector("#number"))

let message = document.querySelector("#p1")

let score = Number (document.querySelector(".score1").textContent);
let highscore = Number (document.querySelector(".score2").textContent);
let number = Number (document.querySelector(".number"))


const SecretNumber = Math.floor(Math.random() * 20 + 1);
console.log(SecretNumber)


check.addEventListener("click",  eventss, {once:true})

    
function eventss () {

    const guess = Number (document.querySelector("#number").value)
    let highscore = Number (document.querySelector(".score2"))
    if (!guess) {
        message.textContent = "No number, Please insert a number"
        score = score - 2;
        document.querySelector(".score1").textContent = score

    } else if (guess < SecretNumber) {
        message.textContent = "You have lower number try again"
        score--
        document.querySelector(".score1").textContent = score

    } else if (guess > SecretNumber) {
        message.textContent = "You have higher number try again"
        score = score - 2
        document.querySelector(".score1").textContent = score

    } else if (guess === SecretNumber){
        message.textContent = ` You have score 
        Click Again to play again`
        score = score + 2
        document.querySelector(".score1").textContent = score
        document.querySelector(".number").textContent = SecretNumber
        highscore = score
        document.querySelector(".score2").textContent = highscore
        number.textContent = SecretNumber
        
        document.body.style.backgroundColor = "green";
        document.getElementById("quest").style.width = "15rem"
        
        setTimeout(() => {
            check.removeEventListener("click", eventss)
        }, 2000)

    } 
       
}  



function refresh () { 

    let guess = Number (document.querySelector("#number").value)
    guess = Number (document.querySelector("#number").textContent = "")

    document.querySelector(".number").textContent = "?";

    document.body.style.backgroundColor = "darkgray";
    document.getElementById("quest").style.width = "9.5rem";
    
} 
    
   
    again.addEventListener("click", refresh )


/*
console.log(document.querySelector("#guess"))
//console.log(document.getElementById("check"))
console.log("f")

let checking = function() {
    console.log("yes")
}


const check =  document.querySelector("#check")

checking.addEventListener("click", checking)
*/
