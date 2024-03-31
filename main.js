{
    let timer;

    let timerFunction = () => {
        const h1 = document.querySelector("h1");
        const input = document.querySelector(".input");

        if(isNaN(input.value)) alert("Введите число!!!");
        else if(input.value == 0) alert("Ввод не может быть равен 0!!!");
        else h1.textContent = input.value;

        clearInterval(timer);

        timer = setInterval(minusFunction = () =>{
            h1.textContent -= 1;
            if(h1.textContent == 0) clearInterval(timer);
        }, 1000)
    }

    document.querySelector(".btn").addEventListener("click", timerFunction);
}

{
    let p = document.createElement("p");
    p.textContent = "Задание 2";
    document.body.append(p);

    let h2 = document.createElement("h2");
    h2.textContent = "Ваш текст";
    h2.classList.add("h2");
    document.body.append(h2);

    let inputText = document.createElement("input");
    inputText.placeholder = "Введите текст";
    inputText.classList.add("inputText");
    document.body.append(inputText);

    let timer;

    let teleportFunction = () => {

        clearTimeout(timer);

        timer = setTimeout(delayFunction = () => {
            h2.textContent = inputText.value
            if(inputText.value == "") h2.textContent = "Ваш текст"
        }, 300)
    }

    inputText.addEventListener("input", teleportFunction);
}