const ejercicios = [
{
t:'Ejercicio 1',
e:'Calcula el volumen del sólido generado al girar la región delimitada por \\(y=x^2\\), en \\([0,1]\\) alrededor del eje x.',
r:'\\(V=\\pi/5\\)'
},
{
t:'Ejercicio 2',
e:'Calcula el volumen al girar \\(y=\\sqrt{x}\\), en \\([0,4]\\) alrededor del eje x.',
r:'\\(V=8\\pi\\)'
},
{
t:'Ejercicio 3',
e:'Calcula el volumen al girar \\(y=x+1\\), en \\([0,2]\\) alrededor del eje x.',
r:'\\(V=26\\pi/3\\)'
}
];

const lista = document.getElementById("contenedorEjercicios");

function render(f = "") {

lista.innerHTML = "";

ejercicios
.filter(x => (x.t + x.e).toLowerCase().includes(f.toLowerCase()))
.forEach((x, i) => {

const d = document.createElement("div");

d.className = "card";

d.innerHTML = `
<h2>${x.t}</h2>

<p>${x.e}</p>

<button onclick="toggle(${i})">
Mostrar respuesta
</button>

<div class="respuesta" id="r${i}" style="display:none;">
${x.r}
</div>
`;

lista.appendChild(d);

});

if (window.MathJax)
MathJax.typesetPromise();

}

function toggle(i){

const e = document.getElementById("r"+i);

e.style.display =
e.style.display==="block"
? "none"
: "block";

}

document
.getElementById("buscador")
.addEventListener("input",e=>render(e.target.value));

render();
