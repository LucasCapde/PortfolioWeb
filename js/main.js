//      FUNCIÓN PARA DARLE A LA PRESENTACIÓN EFECTO DE ESTAR SIENDO ESCRITA

function typeEffect(element, speed) {
	var text = element.innerHTML;
	h1.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

var speed = 150;
var h1 = document.querySelector('h1');
var delay = h1.innerHTML.length * speed + speed;

typeEffect(h1, speed);





//      FUNCIÓN PARA MENU DESPLEGABLE CON RESPONSIVE WEB DESIGN

const toggleMenuElement = document.getElementById('toggle-menu');
const itemsMenuElement = document.getElementById('items');

toggleMenuElement.addEventListener('click', ()=>{
    itemsMenuElement.classList.toggle('items--show');
});





//      FUNCIÓN PARA SWITCH MODO OSCURO

const btnSwitch = document.getElementById('switch');

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});