var no = Math.floor(Math.random() *100)
btncheck.addEventListener('click', check = () =>{
    let guess = document.getElementById('inptguess').value

    if (guess <0 || guess>100 ) {
        alert("Enter a Valid No !")
    }
    if (guess==no) {
        document.getElementById('pardec').style.height = '10%'
        document.getElementById('guess-sucess').innerHTML = "Congratulation You Win !"
    }
    else if (guess-25>no) {
        document.getElementById('pardec').style.height = '10%'
        document.getElementById('guess-sucess').innerHTML = "Enter a very Lesser NO!"
    }
    else if (guess>no) {
        document.getElementById('pardec').style.height = '10%'
        document.getElementById('guess-sucess').innerHTML = "Enter a Lesser NO!"
    }
     if ((guess+25)<no) {
        document.getElementById('pardec').style.height = '10%'
        document.getElementById('guess-sucess').innerHTML = "Enter a More Higher NO!"
    }
    else if (guess<no) {
        document.getElementById('pardec').style.height = '10%'
        document.getElementById('guess-sucess').innerHTML = "Enter a Higher NO!"
    }
    console.log(guess);
    console.log(no);
})