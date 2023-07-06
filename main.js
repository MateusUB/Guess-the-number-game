
let randomNumber = Math.round(Math.random() * 10) //muda let para const
let xAttempts = 1
let tryBtn = document.querySelector("#tryBtn")
let resetBtn = document.querySelector("#resetBtn")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
console.log(randomNumber)
function handleTryClick (event) {
    event.preventDefault()

    let inputNumber = document.querySelector("#inputNumber")


    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        if (xAttempts == 1) {
            screen2.querySelector("h2").innerText = `Parabéns, acertou em 1 tentativa`
            screen2.querySelector("p").innerText =`O número pensado foi: ${randomNumber}`

        }
        else{
            screen2.querySelector("h2").innerText = `Parabéns, acertou em ${xAttempts} tentativas`
            screen2.querySelector("p").innerText =`O número pensado foi: ${randomNumber}`
        }
        

    }

    else if(inputNumber.value > 10 || inputNumber.value < 0) {
        alert('Atenção, digite apenas números entre 0 e 10')
    }
    inputNumber.value = ""
    xAttempts++
}

function handleResetButton () {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    randomNumber = Math.round(Math.random() * 10)
    xAttempts = 1
}

function enterResetButton (e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetButton()
    }
}

function validations (){
    if(inputNumber.value > 10 || inputNumber.value < 0) {
        alert('Atenção, digite apenas números entre 0 e 10!')
    }

    else if (inputNumber.value == "") {
        alert("Digite algum número entre 0 e 10.")
    }
}
tryBtn.addEventListener('mouseover', validations)
tryBtn.addEventListener('click', handleTryClick)
resetBtn.addEventListener('click', handleResetButton)
document.addEventListener('keydown', enterResetButton)
