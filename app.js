const age = 21 , spanScore = document.querySelector(".score") , spanResult = document.querySelector(".result")
let score = 20
spanScore.innerHTML = score
document.querySelector(".check").addEventListener("click" , () => {
    const Guess = Number(document.querySelector(".input").value)
    if (age == Guess) {
        spanScore.innerHTML = ++score
        spanResult.innerHTML = "Yuo win..."
        document.querySelector("body").classList.add("win")
    }
    else {
        spanResult.innerHTML = "Try again..."
        document.querySelector("body").classList.add("lose")
        spanScore.innerHTML = --score
        setTimeout(() => {
            spanResult.innerHTML = "Start guessing..."
            document.querySelector(".input").value = ""
            document.querySelector("body").classList.remove("lose")
        }, 2000)
    }
})
document.querySelector(".again").addEventListener("click" , () => {
    score = 20
    spanScore.innerHTML = score
    spanResult.innerHTML = "Start guessing..."
})
