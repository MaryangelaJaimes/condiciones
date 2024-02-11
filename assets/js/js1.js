const img = document.querySelector('img')
let addBorder = false

img.addEventListener('click', function () {
    if(addBorder === false){
    img.style.border = '2px solid red'
    addBorder = true
} else{
    img.style.border = 'none'
    addBorder = false
}
})
