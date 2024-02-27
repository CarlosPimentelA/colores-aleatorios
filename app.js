const boton = document.getElementById('boton');
const color = document.getElementById('color');
const body = document.body;

boton.addEventListener('click', function() {
    let colorR = genColorRand(); 
    color.innerText = colorR;

    body.style.backgroundColor = colorR;    
})

function genColorRand() {
    let valores = '0123456789ABCDEF';
    let colorR = '#';

    for (let i = 0; i < 6; i++) {
    colorR += valores[Math.floor(Math.random() * 16)]
}
return colorR;
}