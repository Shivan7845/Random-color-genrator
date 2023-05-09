const getcolor = function(){
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber,randomCode);
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener("click",getcolor)

getcolor();