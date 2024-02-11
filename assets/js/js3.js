const boton = document.querySelector('button')
let par = document.querySelector('p')

boton.addEventListener('click', function () {
    let selector1 = document.querySelector('#selector1').value
    let selector2 = document.querySelector('#selector2').value
    let selector3 = document.querySelector('#selector3').value
    let cantidad = selector1 + selector2 + selector3

    if(cantidad == '911'){
        par.innerHTML = 'Contraseña1 correcta'
    } else if(cantidad == '714'){
        par.innerHTML = 'Contraseña2 correcta'
    } else{
        par.innerHTML = 'incorrecta'
    }
})