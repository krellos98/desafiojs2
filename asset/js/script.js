imagenBordeRojo = document.getElementById('imagen-borde')
let TieneBorde = false

imagenBordeRojo.addEventListener('click', function() {
    if(TieneBorde == false){
        imagenBordeRojo.style.border = '3px solid red';
        TieneBorde = true
    }else{
        imagenBordeRojo.style.border = 'none';
        TieneBorde= false
    }
});



const sticker01 = document.getElementById('dato01')
const sticker02 = document.getElementById('dato02')
const sticker03 = document.getElementById('dato03')
const botonSticker = document.getElementById('mostrarDato')
const muestraValor = document.getElementById('muestra-stickers')

botonSticker.addEventListener('click',function() {
    let valor01 = parseInt(sticker01.value) 
    let valor02 = parseInt(sticker02.value)
    let valor03 = parseInt(sticker03.value)
    let valorTotal = Number(valor01 + valor02 + valor03)
    
    if(valorTotal<=10){
        muestraValor.innerHTML = "Llevas:" + " " + valorTotal + "" +" Stickers"
    }else{
        muestraValor.innerHTML = "Llevas demasiados Stickers"
    }
})


const selectorNumero01 = document.getElementById('selectorNumero01');
const selectorNumero02 = document.getElementById('selectorNumero02');
const selectorNumero03 = document.getElementById('selectorNumero03');
const muestraPass = document.getElementById('mostrarPassword')
const botonSelectores = document.getElementById('boton-selectores');

botonSelectores.addEventListener('click',function(){
    const valorSelect01 = parseInt(selectorNumero01.value);
    const valorSelect02 = parseInt(selectorNumero02.value);
    const valorSelect03 = parseInt(selectorNumero03.value);

    const valoresConcatenados = valorSelect01.toString() + valorSelect02.toString() + valorSelect03.toString();

    if(valoresConcatenados==="232"){
        muestraPass.innerHTML = "Password 1 correcto"
    }else if(valoresConcatenados==="242"){
        muestraPass.innerHTML = "Password 2 correcto"
    }else{
        muestraPass.innerHTML = "Password incorrecto"
    }
    })
