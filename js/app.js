let main = document.querySelector(".main")

console.log("kakak")

let input = document.createElement("input")
input.type = "text"
input.placeholder = "сгенерировать пароль"

main.append(input)

let btn1 = document.createElement("button")
btn1.textContent = "Скопировать"
btn1.style.backgroundColor = "violet"
btn1.classList.add('btn1')
btn1.style.color = "white"
main.append(btn1)

let btn2 = document.createElement("button")
btn2.textContent = "Сгенерировать"
btn2.classList.add('btn2')
btn2.style.backgroundColor = "violet"
btn2.style.color = "white"
main.append(btn2)


// passwd generation'
function getrandom() {
    const numberChars = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolChars = "!@#$%^&*()_+";

    const passwordLength = 14

    const allChars = numberChars + upperChars + lowerChars + symbolChars;

    console.log(allChars)

    console.log(Math.random())
    let generatPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        generatPassword += allChars[Math.floor(Math.random() * allChars.length)]

    }

    return generatPassword
}

console.log(getrandom())

document.querySelector(".btn2").addEventListener("click", () => {
    console.log('dasdasd')
    let generatedPassword = getrandom();
    input.value = generatedPassword;
});

document.querySelector(".btn1").addEventListener("click", () => {
    navigator.clipboard.writeText(input.value);
});


    // let generatedPassword = getrandom();
    // input.value = generatedPassword;
