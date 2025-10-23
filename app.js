let number = 7 
let secret = +prompt("Gusse The secret Number ")
if(number == secret){
    // alert("Bingo! Correct Answer")
    console.log("Bingo! Correct Answer")
}
else if (number == secret+1 || number == secret-1){
    // alert("Closed Enough to the Correct Answer")
    console.log("Closed Enough to the Correct Answer")
}
else if (number == secret+2 || number == secret-2){
    // alert("Closed Enough to the Correct Answer")
    console.log("Thora or dhur ho")
}
else if (number == secret+3 || number == secret-3){
    // alert("Closed Enough to the Correct Answer")
    console.log("Both he dhur ho")
}

else{
    // alert("Wrong")
    console.log("Wrong")
}