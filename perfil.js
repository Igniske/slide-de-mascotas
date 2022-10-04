var perfiles =[{
    imagen: "https://i.ibb.co/BNVHvYY/IMG-20190619-WA0040.jpg",
    nombre: "Lola",
    titulo: "Perra de la calle",
    texto: "Le gusta correr hojas en otoño. Es malhumorada cuando quiere dormir.",
},
{
    imagen: "https://i.ibb.co/1rpNkwT/IMG-20190314-WA0014.jpg",
    nombre: "Anibal",
    titulo: "Perro",
    texto: "Le gusta tomar sol. Es jugueton y compañero. No le gusta que lo bañen.",
},
{
    imagen: "https://i.ibb.co/K2K26Hn/IMG-20190520-WA0011.jpg",
    nombre: "Liebre",
    titulo: "Perra de la calle",
    texto: "Miedosa, si se le acerca una persona, corre. Le gusta dormir en su colchon.",
}]

const avanzar = document.querySelector("#avanzar")
const atras = document.querySelector("#atras")
const submit = document.querySelector("#submit")
const imagen = document.getElementById("imagen")
const nombre = document.getElementById("nombre")
const titulo = document.getElementById("titulo")
const texto = document.getElementById("texto")
var addImagen = document.getElementById("addImagen")
var addNombre = document.getElementById("addNombre")
var addTitulo = document.getElementById("addTitulo")
var addDesc = document.getElementById("addDesc")
let count = 0;
var regex = /^http[^ \!@\$\^&\(\)\+\=]+(\.png|\.jpeg|\.gif|\.jpg)$/;




function agregarDatos (){
    let nuevoPerfil = {
        imagen: addImagen.value,
        nombre: addNombre.value,
        titulo: addTitulo.value, 
        texto: addDesc.value
    }
    if(regex.test(addImagen.value) && addNombre.value !== "" && addTitulo.value !== "" && addDesc.value !== "" && addDesc.value.length <= 200 ){
    perfiles.push(nuevoPerfil)
    } else{
        alert("Por favor, ingrese los datos correspondientes.")
    }
}


submit.addEventListener("click", () =>
agregarDatos(),
console.log(perfiles)
)

renderPerfil();

function renderPerfil(){
    imagen.src = perfiles[count].imagen;
    nombre.innerHTML = perfiles[count].nombre;
    titulo.innerHTML = perfiles[count].titulo;
    texto.innerHTML = '"' + perfiles[count].texto + '"';
}

avanzar.addEventListener("click", () =>
avanzarPerfil()
);

function avanzarPerfil(){
    count++
    if(count >= perfiles.length){
        count = 0;
    }
    renderPerfil()
}

atras.addEventListener("click", () =>
retrocederPerfil()
);

function retrocederPerfil(){
    count--
    if(count < 0){
        count = perfiles.length - 1;
    }
    renderPerfil()
}

