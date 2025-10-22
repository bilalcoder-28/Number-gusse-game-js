let number = 7 
let secret = prompt("Gusse The secret Number ")
if(number == secret){
    alert("Bingo! Correct Answer")
}
else if (number == ++secret){
    alert("Closed Enough to the Correct Answer")
}else{
    alert("Wrong")
}