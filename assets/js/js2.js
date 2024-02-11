let h2 = document.querySelector('h2')
let btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let input1 = parseInt(document.querySelector('#input1').value)
    let input2 = parseInt(document.querySelector('#input2').value)
    let input3 = parseInt(document.querySelector('#input3').value)
    let sumar= input1 + input2 + input3

    if(sumar > 10){
        h2.innerHTML = '¡Llevas demasiado stickers!'
    }  else if (sumar <=10) {
      h2.innerHTML= "¡Llevas" + " " + sumar + " " + "stickers!";
    }
})